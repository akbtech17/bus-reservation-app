import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbusComponent } from './listbus/listbus.component';
import { FindbusComponent } from './findbus/findbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { RemovebusComponent } from './removebus/removebus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { SeatbookComponent } from './seatbook/seatbook.component';
import { SidebarcustomerComponent } from './sidebarcustomer/sidebarcustomer.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { WalletComponent } from './wallet/wallet.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbusComponent,
    FindbusComponent,
    AddbusComponent,
    EditbusComponent,
    RemovebusComponent,
    AdminloginComponent,
    AboutusComponent,
    ContactComponent,
    NavadminComponent,
    SearchbusComponent,
    CustomerRegistrationComponent,
    LogincustomerComponent,
    SeatbookComponent,
    SidebarcustomerComponent,
    BookingsComponent,
    ProfileComponent,
    ChangepasswordComponent,
    WalletComponent,
    PassengerComponent,
    TransactionComponent,
    CarddetailsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
  
    BrowserAnimationsModule,MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
