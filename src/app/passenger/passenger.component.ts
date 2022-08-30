import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatWith } from 'rxjs';
import { Ipassenger } from '../ipassenger';
import { TransactionDetails } from '../transaction-details';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passdetails: Ipassenger = {
    "PId": 0, 
    "TId": 0, 
    "PName": '', 
    "Age": 0,
    "Adhar": '',
    "Gender": ''
  }
  seat_arr: string[] = TransactionDetails.seats
  cnt:number=0
  BusId:number=0
  seats:string[]=[]
  count:number=0
  passengerArray: Ipassenger[]=[]
    
    /*{"PId": 2, "TId":1, "PName":"Ashish", "Age":24,"Adhar":"392266402198","Gender": "M"},
    {"PId": 3, "TId":1, "PName":"Omkar", "Age":27,"Adhar":"392266402198","Gender": "M"},
    {"PId": 4, "TId":1, "PName":"Pritam", "Age":19,"Adhar":"392266402198","Gender": "M"}
    {"PId": 5, "TId":2, "PName":"George", "Age":41,"Adhar":"392266402198","Gender": "M"},
    {"PId": 6, "TId":2, "PName":"Rekha", "Age":64,"Adhar":"392266402198","Gender": "F"}
  */
  constructor(private router:Router, private activateroute: ActivatedRoute ) {}

  ngOnInit(): void {
    // const data = this.activateroute.snapshot.paramMap.get('BusId')
   
    // console.log("Bus id in passenger is" + data)
    // console.log("count from passenger ",TransactionDetails.seatCount)
    // console.log("count from passenger ",TransactionDetails.seats)
  }
  show(passdet:Ipassenger) {
    alert("Submitted Successfully..!")
    this.passdetails = passdet;
    // console.log(this.passdetails)
    this.passengerArray.push(this.passdetails)
    this.cnt++;
    this.passdetails.PId=0 
    this.passdetails.TId=0 
    this.passdetails.PName=''
    this.passdetails.Age=0
    this.passdetails.Adhar=''
    this.passdetails.Gender=''
    if(this.cnt==this.seat_arr.length){
      //call the service to add passenger details in Passenger Table
      TransactionDetails.passengers=this.passengerArray

      console.log("after entering the details of pass")
      console.log("printing the details of the data gathered so far till pass component")
      console.log("BusId is " + TransactionDetails.busId)
      console.log("CustomerId is " + TransactionDetails.cId)
      console.log("Selected seats count " + TransactionDetails.seatCount)
      console.log("Selected Seats" + TransactionDetails.seats)
      console.log("Details of Pass" + TransactionDetails.passengers[0])

      this.router.navigate(["/card"]);
    }
    else{
      //call the service to add passenger details in Passenger Table
      this.router.navigate(["/passdetails"]);
      console.log(this.cnt)
    }
  }
}
