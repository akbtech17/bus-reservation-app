import { Component, OnInit } from '@angular/core';
import { Icard } from '../../Models/icard';
import { Router } from '@angular/router';
import { BusserviceService } from '../../../Admin/Services/busservice.service';
import { TransactionDetails } from '../../Models/transaction-details';
import { Ibus } from '../../../Admin/Models/ibus';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})

export class CarddetailsComponent implements OnInit {
  tId: number = 0
  carddetails : Icard = {
    "cardNumber" : '',
    "cvv" : '',
    "expiry" : ""
  }
  seatcost: number=0
  totcost : number=0

  
  constructor(private router:Router, private busservice: BusserviceService) { }

  Show(card:Icard){
    alert("Payment Done Successfully..!")
    console.log(this.carddetails);
    TransactionDetails.cardNumber = this.carddetails.cardNumber
    TransactionDetails.tId = this.tId

    this.router.navigate(['summary']);
  }

  ngOnInit(): void {
    console.log(TransactionDetails.busId); //This is the way of using central storage and web api services together.
    console.log(TransactionDetails.seatCount);
    // this.busservice.getBus(TransactionDetails.busId).subscribe((data:Ibus)=>{
    //   this.totcost=TransactionDetails.seatCount*data.seatCost
    //   TransactionDetails.totalCost = this.totcost
    //   console.log("data.seatcost :",this.totcost)
    // });
    this.totcost = TransactionDetails.seatCost*TransactionDetails.seatCount;
    TransactionDetails.totalCost = this.totcost
  }
}