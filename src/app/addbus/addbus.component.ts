import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {
  busdata: Ibus = {
    busId: 0,
    busNo: '',
    rows: 0,
    cols: 0,
    dtime: '',
    atime: '',
    pickup: '',
    seatCost: 0,
    driverName: '',
    driverContact: 0,
    typeOfBus: '',
  }
  constructor(private busservice:BusserviceService, private router:Router){ }
  saveBus(bus:Ibus){
    this.busdata = bus
    this.busservice.addBus(this.busdata).subscribe(
      ()=>{
        alert('Record saved successfully')
        this.router.navigate(['/list/'])
      }
    )
  }

  ngOnInit(): void {
  }

}
