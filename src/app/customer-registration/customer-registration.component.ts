import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { Icustomer } from '../icustomer';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  cdata: Icustomer = {
      customerId: 0,
      firstName: "",
      lastName: "",
      gender: "F",
      mobile: "",
      email: "",
      password: "",
      dob:"1996-10-23T12:45:56"
  }
  constructor(private customerservice: CustomerserviceService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.customerservice.postCustomer(this.cdata).subscribe (
      ()=>{ 
        alert('Record saved successfully')
      }
    )
  }
}
