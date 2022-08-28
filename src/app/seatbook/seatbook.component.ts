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
  msg:string=''
  tbIndex = 0
  id=0
clickEvent(index:number,id:number)
{
  this.tbIndex=index
  index=id
  
  this.msg = this.seatdata[id].seatNo
  return this.msg
}
 isSelected = false;
  handleClick($event: MouseEvent):void{
    this.isSelected = !this.isSelected;
}


  // select = false
  // status = 'disable'
  // tabIndex = 0
  // onSelect(){
  //   this.select=!this.select;
  //   this.status = this.select?'disable':'enable';
  //   console.log("Selected")
  // }
  // onClick(index:number){
  //   this.tabIndex = index
  // }
   seatmap: any[][] = []
  // rseat:any[] = []
  // cnt: number = 0
  // row: number = 0


  constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('busId')
    this.busId = Number(tid)
    this.seatservice.getseats(this.busId).subscribe(
      (data:[])=>
      {this.seatdata = data, console.log(this.seatdata,"Value from callback")}
      
    )
   
    
      
  } 
 
 
}
  


