import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { ListbusComponent } from './listbus/listbus.component';
import { FindbusComponent } from './findbus/findbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { RemovebusComponent } from './removebus/removebus.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
//import { UserloginComponent } from './userlogin/userlogin.component';


const routes: Routes = [
  {
    path:'app',component:AppComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'Adminlogin',component:AdminloginComponent
  },
  {
    path:'nav',component:NavadminComponent
  },
  {
    path:'add', component:AddbusComponent
  },
  {
    path:'edit/:busId', component:EditbusComponent
  },
  {
    path:'remove/:busId', component:RemovebusComponent
  },
  {
    path:'find/:busId', component:FindbusComponent
  },
  {
    path: 'list', component:ListbusComponent
  },
  {
    path: 'searchbus', component:SearchbusComponent
  },
  {
    path: 'cregister', component:CustomerRegistrationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
