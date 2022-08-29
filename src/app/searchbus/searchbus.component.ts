import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Isearchbus } from '../isearchbus';
import { ActivatedRoute } from '@angular/router';

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
  busId:number = 0
  isShown:boolean =false;
  Buslist: any[] = []
    seatAvb: any[] = []
  constructor(private busservice: BusserviceService, private router: Router, private activateroute:ActivatedRoute) { }

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
