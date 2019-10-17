import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private subscriptionDetails: ISubscriptionDetails;

  constructor() { }

  public getSubscription(): ISubscriptionDetails {
    return this.subscriptionDetails;
  }

  public setSubscription(subscriptionDetails: ISubscriptionDetails): void {
    this.subscriptionDetails = subscriptionDetails;
  }
}

export interface ISubscriptionDetails {
  email: string;
  type: string,
  password: string
};