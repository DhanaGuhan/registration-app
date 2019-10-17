import { Component, OnInit } from '@angular/core';
import { ISubscriptionDetails } from '../shared/state.service';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.css']
})
export class ListSubscriptionComponent implements OnInit {

  subscriptionDetails: ISubscriptionDetails;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.subscriptionDetails = this.stateService.getSubscription();
  }

}
