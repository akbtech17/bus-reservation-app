import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { Itransactionres } from '../itransactionres';
import { TransactionDetails } from '../transaction-details';
import { Bookingpassenger } from '../bookingpassenger';
import { Passenger } from '../passenger';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  transactiondata:any[]=[]
  
  // transactiondata :  Itransactionres ={
    
  //   tId: 0,
  //   busId: 0,
  //   totalCost: 0,
  //   customerId: 0,
  //   dateofBooking:new Date(),
  //   seats:[],
  //   passengers:[]
    
  // }
  
  customerId:number = 0

  today :Date= new Date();
    constructor(private transactionservice:TransactionserviceService, private activateroute:ActivatedRoute) {
     
     }
  
    ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('customerId')
    this.customerId = Number(tid)
   
    this.transactionservice.getTransactiondet(TransactionDetails.customerId).subscribe(
    (data:any)=>{
      console.log(data[0].passengers)
      // Bookingpassenger.passengers  = data.passengers
    
      this.transactiondata = data
      TransactionDetails.tId = data.tId

      console.log(data.busId)
      console.log(this.transactiondata)
      
  }
  
   ) 
   
  }

}


function isDateEqual() {
  throw new Error('Function not implemented.');
}
// 

 