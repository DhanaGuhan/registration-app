import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { CreateSubscriptionComponent } from './create-subscription.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { ListSubscriptionComponent } from '../list-subscription/list-subscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateSubscriptionComponent', () => {
  let component: CreateSubscriptionComponent;
  let fixture: ComponentFixture<CreateSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubscriptionComponent, ListSubscriptionComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatInputModule, 
        MatButtonModule,
        MatSelectModule, 
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatDialogModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
