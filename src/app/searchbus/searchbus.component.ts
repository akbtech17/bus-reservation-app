import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Isearchbus } from '../isearchbus';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  searchquery: Isearchbus = {
    "source" : "",
    "destination" : "",
    "dDate" : "",
  }
  Buslist: any[] = []
  constructor(private busservice: BusserviceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("searching bus for"+ this.searchquery.source);
    this.busservice.searchBuses(this.searchquery).subscribe(data=> {  this.Buslist = data });
    console.log(this.Buslist);
    alert("serched buses");
  }
}
