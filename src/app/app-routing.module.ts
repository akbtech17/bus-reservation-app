import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListbusComponent } from './listbus/listbus.component';
import { FindbusComponent } from './findbus/findbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { RemovebusComponent } from './removebus/removebus.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {
    path:'Adminlogin',component:AdminloginComponent
  },
  {
    path:'add', component:AddbusComponent
  },
  {
    path:'edit/:BusNo', component:EditbusComponent
  },
  {
    path:'remove/:BusNo', component:RemovebusComponent
  },
  {
    path:'find/:id', component:FindbusComponent
  },
  {
    path: 'list', component:ListbusComponent
  },
  {
    path:'Userlogin',component:UserloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
