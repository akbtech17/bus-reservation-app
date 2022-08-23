import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBusComponent } from './list-bus/list-bus.component';
import { ListbusComponent } from './listbus/listbus.component';
import { FindbusComponent } from './findbus/findbus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { RemovebusComponent } from './removebus/removebus.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBusComponent,
    ListbusComponent,
    FindbusComponent,
    AddbusComponent,
    EditbusComponent,
    RemovebusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
