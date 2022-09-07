import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../../Services/busservice.service';
import { Ibus } from '../../Models/ibus';

@Component({
  selector: 'app-removebus',
  templateUrl: './removebus.component.html',
  styleUrls: ['./removebus.component.css']
})
export class RemovebusComponent implements OnInit {
  busdata: Ibus = {
    busId:0,
    busNo: '',
    rows: 0,
    cols: 0,
    dTime: '',
    aTime: '',
    pickup: '',
    seatCost: 0,
    driverName: '',
    driverContact: 0,
    typeOfBus: '',
    source: '',
    destination: '',
    distance: 0,
   
  }
busId: number = 0
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('busId')
 
    this.busId = Number(tid)
   
    this.busservice.getBus(this.busId).subscribe((data:Ibus)=>{this.busdata=data;console.log(this.busdata);
    this.removeBus(this.busdata)
    this.router.navigate(['/list'])
    })}
  removeBus(bus:Ibus){
   
    this.busdata = bus
    this.busservice.deleteBus(this.busdata).subscribe(
      ()=>{
        
        alert("Records Edited.")
        // console.log(this.busdata);
      
      }
    )
  
  }
}
