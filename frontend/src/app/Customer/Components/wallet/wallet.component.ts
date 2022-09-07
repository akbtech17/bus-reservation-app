import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../../customerservice.service';
import { TransactionDetails } from '../../../transaction-details';
import { TransactionComponent } from '../../../transaction/transaction.component';




@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletAmount: number = 0
  constructor(private customerservice: CustomerserviceService) {
    this.customerservice.getWalletStatement(TransactionDetails.customerId).subscribe((data:any) => {
      this.walletAmount = Number(data)
    })
  }




  ngOnInit(): void {




  }




}