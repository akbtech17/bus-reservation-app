import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../icustomer';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
import { TransactionDetails } from '../transaction-details';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
  logindata:Icustomer={
    customerId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    dob: ''
  }
  constructor(private customerservice: CustomerserviceService,private router: Router ) { }


  ngOnInit(): void {
  }

  logincust(){
    this.customerservice.loginCustomer(this.logindata).subscribe(
      data=>{
        if(data)
        {
          alert("Welcome")
          TransactionDetails.cId = data.customerId
          this.router.navigate(['/sidebarcust', {custName: data.firstName}])
        }
        console.log("Error")
      }
    )
  }

}
