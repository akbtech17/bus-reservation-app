import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';


@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrls: ['./editbus.component.css']
})
export class EditbusComponent implements OnInit {
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
  id:number = 0
  constructor(private busservice:BusserviceService, private activatedroute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.busservice.getBus(this.id).subscribe((data:Ibus)=>{this.busdata=data})
  }
saveBus(bus:Ibus){
  this.busdata = bus
  this.busservice.editBus(this.busdata).subscribe(
    ()=>{
      alert("Records Edited")
      this.router.navigate(['/list/'])
    }
  )
}
}
