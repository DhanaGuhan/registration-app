import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ConfirmDialogComponent } from './confirmation-dialog/confirm-dialog.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    CreateSubscriptionComponent,
    ListSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule, 
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 