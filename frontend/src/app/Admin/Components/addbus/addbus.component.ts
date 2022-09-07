import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../../Services/busservice.service';
import { ActivatedRoute } from '@angular/router';
import { Ibus } from '../../Models/ibus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
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
  constructor(private busservice:BusserviceService, private router:Router, private activateroute: ActivatedRoute){ }
  saveBus(bus:Ibus){
   
    this.busdata = bus
    console.log(this.busdata);
    this.busservice.addBus(this.busdata).subscribe(
      ()=>{ 
        console.log(this.busdata)
        alert('Record saved successfully')
        this.router.navigate(['/list'])
      }
    )
  }

  ngOnInit(): void {
  }

}
