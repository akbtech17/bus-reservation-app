import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { Itransactionres } from '../itransactionres';
import { TransactionDetails } from '../transaction-details';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  transactiondata: Itransactionres ={
    tId: 0,
    busId: 0,
    totalCost: 0,
    customerId: 0,
    dateofBooking:new Date(),
    seats:[],
    passengers:[]
  }
  customerId:number = 0
  
    constructor(private transactionservice:TransactionserviceService, private activateroute:ActivatedRoute) {
     
     }
  
    ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('customerId')
    this.customerId = Number(tid)
   
    this.transactionservice.getTransactiondet(TransactionDetails.customerId).subscribe(
    (data:Itransactionres)=>{
      this.transactiondata = data
      console.log(this.transactiondata)
  }
   
   ) 
   
  }

}

// today :Date= new Date();

  // isDateEqual(dateOfBooking:Date) {
  //     if(dateOfBooking.getTime()>this.today.getTime())
  //       return true;
  //   return false;