import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipassengerdet } from '../../Models/ipassengerdet';
import { Passenger } from '../../Models/passenger';
import { TransactionDetails } from '../../Models/transaction-details';
import { TransactionserviceService } from '../../Services/transactionservice.service';
import { Bookingpassenger } from '../../Models/bookingpassenger';

@Component({
  selector: 'app-passbooked',
  templateUrl: './passbooked.component.html',
  styleUrls: ['./passbooked.component.css']
})
export class PassbookedComponent implements OnInit {
passdata:any[]=[]
tId:number =0
  
constructor(private transactionservice: TransactionserviceService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  
    const id = this.activatedroute.snapshot.paramMap.get('tId')
    this.tId = Number(id)
    this.transactionservice.getPassenger(this.tId).subscribe(
      (data:any)=>{
        this.passdata = data
       console.log(data)
      }
      
    )
   
  }

}
