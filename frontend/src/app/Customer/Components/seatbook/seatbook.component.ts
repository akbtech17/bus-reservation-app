import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusserviceService } from '../../../Admin/Services/busservice.service';
import { Ibus } from '../../../Admin/Models/ibus';
import { SeatserviceService } from '../../Services/seatservice.service';
import { TransactionDetails } from '../../Models/transaction-details';

@Component({
  selector: 'app-seatbook',
  templateUrl: './seatbook.component.html',
  styleUrls: ['./seatbook.component.css']
})



export class SeatbookComponent implements OnInit {
  seatdata: any[]=[]
  
  // this data should be transfered to our next component
  selectedSeatsCount: number = 0
  selectedSeats: string[] = []

  busNo:string = ''

  

  seatmap: any[] = []
  // 0 - disable
  // 1 - avb
  // 2 - selected

  onClick(clickedSeat: string ) {
    this.seatmap.forEach(object => {
      if(object.available!=0 && object.seatNo == clickedSeat) object.available = object.available == 1 ? 2 : 1
    });
  }

  onSubmit() {
    // reset the selected seats on confirmation
    this.selectedSeats = []
    this.selectedSeatsCount = 0
    this.seatmap.forEach(object => {
      var seatNo = object.seatNo
      if(object.available==2) {
        this.selectedSeats.push(seatNo)
        console.log(object.seatNo)
        this.selectedSeatsCount += 1
      }
      }
    )
    // console.log("count of selected seats are : " + this.selectedSeatsCount)
    // console.log("list of selected seats : " + this.selectedSeats)
  }

  onNext() {
      // console.log("busNo from seatbook is : " + this.busNo)
      TransactionDetails.seatCount = this.selectedSeatsCount
      TransactionDetails.seats = this.selectedSeats
      // console.log("count from seatbook",TransactionDetails.seatCount)
      this.router.navigate(['/passdetails'])
  }

  constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute, private router:Router, private busservice: BusserviceService) { 
  }

  ngOnInit(): void {
    const busNo = this.activatedroute.snapshot.paramMap.get('busNo')
    this.busNo = String(busNo)

    this.busservice.getBus(this.busNo).subscribe((busdata:Ibus)=>{
      TransactionDetails.busId = busdata.busId
      TransactionDetails.source = busdata.source
      TransactionDetails.destination = busdata.destination
      TransactionDetails.dTime = busdata.dTime
      TransactionDetails.aTime = busdata.aTime
      TransactionDetails.busNo = busdata.busNo
      TransactionDetails.driverContact = busdata.driverContact
      TransactionDetails.driverName = busdata.driverName
      TransactionDetails.distance = busdata.distance
      TransactionDetails.pickup = busdata.pickup
      TransactionDetails.typeOfBus = busdata.typeOfBus
      TransactionDetails.seatCost = busdata.seatCost


      this.seatservice.getseats(busdata.busId).subscribe(
        (data:any[]) => {
          this.seatdata = data
          // console.log(this.seatdata)
          this.seatdata.forEach(data => {
            var detseat = {
              seatNo: data.seatNo,
              available : data.available ? 1 : 0
            }
            this.seatmap.push(detseat)
          })
          // line 6
          console.log(this.seatmap)
        }
      )

      console.log(TransactionDetails);
    }) 
  } 
}





























// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Iseat } from '../iseat';
// import { SeatserviceService } from '../seatservice.service';



// @Component({
//   selector: 'app-seatbook',
//   templateUrl: './seatbook.component.html',
//   styleUrls: ['./seatbook.component.css']
// })
// export class SeatbookComponent implements OnInit {
//   seatdata: any[]=[]
//   cols:number[]=[1,2,3,4,5]
//   busNo:number = 0
//   msg:string=''
//   tbIndex = 0
//   id=0
// clickEvent(index:number,id:number)
// {
//   this.tbIndex=index
//   index=id
  
//   this.msg = this.seatdata[id].seatNo
//   return this.msg
// }
//  isSelected = false;
//   handleClick($event: MouseEvent):void{
// //     this.isSelected = !this.isSelected;
// // }


//   // select = false
//   // status = 'disable'
//   // tabIndex = 0
//   // onSelect(){
//   //   this.select=!this.select;
//   //   this.status = this.select?'disable':'enable';
//   //   console.log("Selected")
//   // }
//   // onClick(index:number){
//   //   this.tabIndex = index
//   // }
//    seatmap: any[][] = []
//   // rseat:any[] = []
//   // cnt: number = 0
//   // row: number = 0


//   constructor(private seatservice: SeatserviceService, private activatedroute:ActivatedRoute) { }

//   ngOnInit(): void {
//     const tid = this.activatedroute.snapshot.paramMap.get('busNo')
//     this.busNo = Number(tid)
//     this.seatservice.getseats(this.busNo).subscribe(
//       (data:[])=>
//       {this.seatdata = data, console.log(this.seatdata,"Value from callback")}
      
//     )
   
    
      
//   } 
 
 
// }
  


