import { Component, OnInit } from '@angular/core';
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
      gender: "",
      mobile: "",
      email: "",
      password: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Registered")
  }
  
}
