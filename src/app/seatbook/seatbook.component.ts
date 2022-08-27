import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iseat } from '../iseat';
import { SeatserviceService } from '../seatservice.service';



@Component({
  selector: 'app-seatbook',
  templateUrl: './seatbook.component.html',
  styleUrls: ['./seatbook.component.css']
})
export class SeatbookComponent implements OnInit {
  seatdata: any[]=[]
  cols:number[]=[1,2,3,4]
  busId:number = 0

 

  constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('busId')
    this.busId = Number(tid)
    this.seatservice.getseats(this.busId).subscribe((data:any[])=>{this.seatdata = data, console.log(data)}
    
    )
    console.log(this.seatdata)
    

  }

  
    
  }
  


