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

  busNo: string = ''
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const busNo = this.activateroute.snapshot.paramMap.get('busNo')
 
    this.busNo = String(busNo)

    this.busservice.deleteBus(this.busNo).subscribe(
      ()=> this.router.navigate(['/list'])
    )
    this.router.navigate(['/list'])
  }
}