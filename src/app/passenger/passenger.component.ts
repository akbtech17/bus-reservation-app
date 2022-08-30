import { transition } from '@angular/animations';
import { ParseError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatWith } from 'rxjs';
import { Ipassenger } from '../ipassenger';
import { Passenger } from '../passenger';
import { TransactionDetails } from '../transaction-details';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passdetails: Passenger = {
    "PId": 0, 
    "TId": 0, 
    "PName": '', 
    "Age": 0,
    "Adhaar": '',
    "Gender": ''
  }
  // seat_arr: string[] = TransactionDetails.seats
  seat_arr: string[] = ['A0']
  cnt:number=0
  BusId:number=0
  seats:string[]=[]
  count:number=0
  passengerArray: Passenger[] = []
  constructor(private router:Router, private activateroute: ActivatedRoute ) {}

  ngOnInit(): void {
  }
  show(passdet:Passenger) {
    // alert("Submitted Successfully..!")
    
    // this.passdetails = passdet;
    console.log(this.passdetails)
    this.passengerArray.push(new Passenger(this.passdetails.PId, this.passdetails.TId, this.passdetails.PName, this.passdetails.Age, this.passdetails.Adhaar, this.passdetails.Gender))
    this.cnt++;

    // resetting the passenger
    this.passdetails.PId=0 
    this.passdetails.TId=0 
    this.passdetails.PName=''
    this.passdetails.Age=0
    this.passdetails.Adhaar=''
    this.passdetails.Gender=''

    if(this.cnt==this.seat_arr.length){
      TransactionDetails.passengers = this.passengerArray
      this.router.navigate(["/card"]);
    }
    else{
      //call the service to add passenger details in Passenger Table
      this.router.navigate(["/passdetails"]);
      // console.log(this.cnt)
    }
  }
}
