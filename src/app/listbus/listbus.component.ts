import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../busservice.service';


@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {

Buslist: any[] = []
  constructor(private busservice:BusserviceService) {
      //Subscribe is a kind of callback, it is necessary for execution
    //Definition for passing data to the method
    //Client subscribing to the method to get the data
    this.busservice.getBusList().subscribe(data=>{this.Buslist=data})
    console.log(this.Buslist)
   }

  ngOnInit(): void {
  }

}
