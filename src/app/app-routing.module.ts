import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';


export const routes: Routes = [
  { path:'create-subscription', component: CreateSubscriptionComponent },
  { path:'list-subscription', component: ListSubscriptionComponent },
  { path:'', redirectTo:'/create-subscription', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
