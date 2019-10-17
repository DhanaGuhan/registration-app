import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSubscriptionComponent } from './list-subscription.component';
import { CreateSubscriptionComponent } from '../create-subscription/create-subscription.component';

describe('ListSubscriptionComponent', () => {
  let component: ListSubscriptionComponent;
  let fixture: ComponentFixture<ListSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubscriptionComponent, CreateSubscriptionComponent ],
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
    fixture = TestBed.createComponent(ListSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
