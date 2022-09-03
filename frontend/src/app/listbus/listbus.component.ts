import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../busservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {
 
 
  Buslist: any[] = []
  constructor(private busservice:BusserviceService, private router: Router, public activatedroute:ActivatedRoute) {
      //Subscribe is a kind of callback, it is necessary for execution
    //Definition for passing data to the method
    //Client subscribing to the method to get the data
    this.busservice.getBusList().subscribe(data=>{this.Buslist=data})
    console.log(this.Buslist)
    
   }
  
  ngOnInit(): void {
    // const tid = this.activatedroute.snapshot.paramMap.get('busId')
    // this.busId = Number(tid)
    // this.busservice.getBus(this.busId).subscribe((data:Ibus)=>{data})
  }
  // DeleteBUS(busId:number)
  // {
    
  //   this.busservice.deleteBus(busId).subscribe(
  //     ()=>
  //     {
  //       console.log(this.Buslist)
  //       alert("Records Deleted");
  //     }
  //   );
  // }

}
