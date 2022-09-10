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

  busNo: string = ''
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const busNo = this.activateroute.snapshot.paramMap.get('busNo')
 
    this.busNo = String(busNo)

    this.busservice.deleteBus(this.busNo).subscribe(
      ()=> this.router.navigate(['/list'])
    )
  }
}