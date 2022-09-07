import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';
import { forkJoin } from 'rxjs';
import { TransactionDetails } from '../transaction-details';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styleUrls: ['./findbus.component.css'],
})
export class FindbusComponent implements OnInit {
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
  seatAvb: any
  busNo: any
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.busNo = this.activateroute.snapshot.paramMap.get('busNo')
    console.log(this.busNo)
    
    this.busservice.getBus(this.busNo).subscribe((data:Ibus)=>{
      this.busdata=data
      // this.busservice.avbSeates(this.busNo).subscribe(
      //   (data:any)=>{
      //     this.seatAvb = data
      //     console.log(this.seatAvb)
      //   }
      // )
    })
  }

}
