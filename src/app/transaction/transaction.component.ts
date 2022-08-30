import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Itransactionres } from '../itransactionres';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { Ipassengerdet } from '../ipassengerdet';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

transactiondata: Itransactionres ={
  tId: 0,
  busId: 0,
  totalCost: 0,
  customerId: 0,
  dateofBooking:'',
  seats:[],
  passengers:[]
  
}
customerId:number = 0
  constructor(private transactionservice:TransactionserviceService, private activateroute:ActivatedRoute) {
   
   }

  ngOnInit(): void {
  const tid = this.activateroute.snapshot.paramMap.get('customerId')
  this.customerId = Number(tid)
 
  this.transactionservice.getTransactiondet(this.customerId).subscribe(
  (data:Itransactionres)=>{
    this.transactiondata = data
    
}
 
 ) 
 
}
}
// today :Date= new Date();

  // isDateEqual(dateOfBooking:Date) {
  //     if(dateOfBooking.getTime()>this.today.getTime())
  //       return true;
  //   return false;
     