import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';
import { Itransaction } from '../itransaction';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
tdata:Itransaction={
tId:0,
busId:0,
customerId:0,
dateOfBooking:'',
totalcost:0
}
  constructor(private transactionservice:TransactionserviceService,private activateroute:ActivatedRoute) { }
  
  ngOnInit(): void {
  }

}
