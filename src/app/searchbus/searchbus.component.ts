import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  isShown:boolean =false;
  Buslist: any[] = []
    seatAvb: any[] = []
  constructor(private busservice: BusserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.busservice.searchBuses(this.searchquery).subscribe(
      data=>

       {  this.Buslist = data }
       );
    console.log(this.Buslist);
  }
  toggleshow()
  {
    this.isShown = !this.isShown;
  }
  
}
