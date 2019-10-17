import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirmation-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { StateService } from '../shared/state.service';
import { ISubscriptionDetails } from '../shared/state.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit{

  subscriptionForm: FormGroup;
  passwordPattern: string;
  emailPattern: string;
  subscriptionTypes: ISubscriptionType[];
  selectedSubscription: string;
  timeout: number;
  userStopped: boolean;
  messages: IMessage[];
  formWarning: boolean;

  constructor(private fb: FormBuilder,
              public dialog: MatDialog,
              private stateService: StateService,
              private router: Router) { }

  ngOnInit() {
    this.passwordPattern = '^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{8,}$';
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.userStopped = false;
    this.formWarning = false;
    this.messages = new Array<IMessage>();
    this.createForm();
    this.initFormData();
  }

  createForm() {
    this.subscriptionForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }

  initFormData() {
    this.subscriptionTypes = [
      { value: 'basic', name: 'Basic' },
      { value: 'advanced', name: 'Advanced' },
      { value: 'pro', name: 'Pro' }
    ];
    this.selectedSubscription = 'advanced';
  }

  userTyping(value: KeyboardEvent) {
   //  this.setFormWarning();


    this.userStopped = false;

    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => {
       this.timeout = null;
       this.userStopped = true;
       console.log(this.userStopped);
       this.setFormWarning();
    }, 2000);
 }

 onClear(): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '300px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined && result.confirmed ) {
      this.subscriptionForm.reset();
      this.initFormData();
    }
  });
}

 setFormWarning() {
  if (this.userStopped && this.subscriptionForm.invalid) {
      if (!this.formWarning) {this.formWarning = true;
       //                     return this.getEmailErrorMessage();
      }
  }

  if (this.userStopped && this.subscriptionForm.valid) {
    this.formWarning = false;
    // return false;
  }
 }

 getAllErrorMessages() {
    this.messages = [];
    if (this.email.errors)  {
      this.messages.push({ field: 'Email', message: this.getEmailErrorMessage() });
    }
    if (this.password.errors) {
      this.messages.push({ field: 'Password', message: this.getPasswordErrorMessage() });
    }

 }

  onSubmit() {
    if (this.subscriptionForm.invalid) {
      this.getAllErrorMessages();
      return;
    }

    const subscriptionDetails: ISubscriptionDetails = {
      email: this.email.value,
      type: this.getSubscriptionType(),
      password: this.password.value
    };

    this.stateService.setSubscription(subscriptionDetails);
    this.router.navigate(['list-subscription']);

  }

  getEmailErrorMessage(): string {
     return this.email.hasError('required') ? 'Email is required' :
            this.email.hasError('email') ? 'Enter Valid Email' : '';
  }

  getPasswordErrorMessage(): string {
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('pattern') ? 'Enter a Password 8 character long with at least one character and one special characte' : '';
  }

  get email(): AbstractControl { return this.subscriptionForm.get('email'); }
  get password(): AbstractControl { return this.subscriptionForm.get('password'); }
  get stopped(): boolean { return this.userStopped; }

  getSubscriptionType(): string {
    let selected: string;
    this.subscriptionTypes.forEach(type => {
        if (type.value === this.selectedSubscription) {
          selected = type.name;
        }
    });
    return selected;
  }

}

export interface ISubscriptionType {
  name: string;
  value: string;
}

export interface IMessage {
  field: string;
  message: string;
}
