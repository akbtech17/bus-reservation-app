import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';

@Component({
  selector: 'app-bookingcancel',
  templateUrl: './bookingcancel.component.html',
  styleUrls: ['./bookingcancel.component.css']
})
export class BookingcancelComponent implements OnInit {
  tId: number = 0
  constructor(private activatedroute: ActivatedRoute, private transactionservice: TransactionserviceService) { }

  ngOnInit(): void {
    var tId = this.activatedroute.snapshot.paramMap.get('tId')
    this.tId = Number(tId)
    console.log(tId);
    this.transactionservice.cancelTransaction(this.tId).subscribe(()=>{
      alert("Transaction is Calcelled and Refund is Initiated")
    })
  }
}
