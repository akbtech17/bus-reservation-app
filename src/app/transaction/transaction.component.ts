import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Itransaction } from '../itransaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
tdetails:Itransaction[]=[{
  tId:1,
  busId:1,
  customerId:1,
  dateOfBooking:new Date('09.02.2022'),
  totalcost:300
},{
  tId:2,
  busId:2,
  customerId:2,
  dateOfBooking:new Date('08.30.2022'),
  totalcost:300
},{
  tId:3,
  busId:2,
  customerId:2,
  dateOfBooking: new Date('08.28.2022'),
  totalcost:400
}]
today :Date= new Date();

  constructor() {
   
   }

  ngOnInit(): void {
  }
  isDateEqual(dateOfBooking:Date) {
      if(dateOfBooking.getTime()>this.today.getTime())
        return true;
    return false;
     
  }
 onclick(){
  alert("Want to cancel the Booking")
 }
}
