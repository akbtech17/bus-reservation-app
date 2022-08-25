import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';
@Component({
  selector: 'app-removebus',
  templateUrl: './removebus.component.html',
  styleUrls: ['./removebus.component.css']
})
export class RemovebusComponent implements OnInit {
id: number = 0
//divya
  constructor(private busservice:BusserviceService,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.busservice.deleteBus(this.id).subscribe(()=>{alert('Deleted')})
   
  }

}
