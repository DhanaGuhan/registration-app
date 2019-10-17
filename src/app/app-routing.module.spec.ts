import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';
import { routes, AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe("Router", () => {
    let location: Location;
    let router: Router;
    let fixture;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes),
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
            BrowserAnimationsModule],
        declarations: [CreateSubscriptionComponent, ListSubscriptionComponent, AppComponent]
      }); 
  
      router = TestBed.get(Router);
      location = TestBed.get(Location);
  
      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    });

    it('should redirect to /create-subscription on "/"', fakeAsync(() => {
        router.navigate(["/"]).then(() => {
            expect(location.path()).toBe("/create-subscription");
        });
    }));

    it('should take to /list-subscription on "list-subscription', fakeAsync(() => {
        router.navigate(["/list-subscription"]).then(() => {
            expect(location.path()).toBe("/list-subscription");
        });
    }));  
}); 