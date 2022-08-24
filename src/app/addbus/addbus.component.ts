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
    BusId: 0,
    BusNo: '',
    Rows: 0,
    Cols: 0,
    DTime: '',
    Atime: '',
    Pickup: '',
    SeatCost: 0,
    DriverName: '',
    DriverContact: 0,
    TypeOfBus: '',
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
