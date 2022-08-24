import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styleUrls: ['./findbus.component.css'],
})
export class FindbusComponent implements OnInit {
  busdata: Ibus = {
    BusId:0,
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
  id: number = 0
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute) {}

  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.busservice.getBus(this.id).subscribe((data:Ibus)=>{this.busdata=data})

  }
}
