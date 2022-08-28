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
  cols:number[]=[1,2,3,4,5]
  busId:number = 0

  // seatmap: any[][] = []
  // rseat:any[] = []
  // cnt: number = 0
  // row: number = 0

 

  constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('busId')
    this.busId = Number(tid)
    this.seatservice.getseats(this.busId).subscribe(
      (data:any[])=>
      {this.seatdata = data, console.log(this.seatdata,"VAlue from callback")}
      
    )
    console.log(this.seatdata)

    // for(var i=0; i<5; i++) {
    //   for(var j=0; j<4; j++) {
    //     this.rseat.push(this.seatdata[this.cnt])
    //     this.cnt++
    //   }
    //   this.seatmap[this.row].push(this.rseat)
    //   this.rseat = []  
    //   this.row++;  
    // }
    // console.log(this.seatmap)
   

  } 
}
  


