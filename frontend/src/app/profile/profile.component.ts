import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { Icustomer } from '../icustomer';
import { TransactionDetails } from '../transaction-details';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cdata:Icustomer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    dob: ''
  }
 

  constructor(private customerservice: CustomerserviceService, private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.customerservice.getCustomer(TransactionDetails.customerId).subscribe((data:Icustomer)=>{this.cdata = data
    console.log(this.cdata)
      
    }
    )
  }

}
