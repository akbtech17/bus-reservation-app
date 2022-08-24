import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
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
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    ListbusComponent,
    FindbusComponent,
    AddbusComponent,
    EditbusComponent,
    RemovebusComponent,
    AdminloginComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    BrowserAnimationsModule,MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
