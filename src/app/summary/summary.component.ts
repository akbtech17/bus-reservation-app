import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passenger';
import { TransactionDetails } from '../transaction-details';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  customerId: number = TransactionDetails.customerId
  busId: number = TransactionDetails.busId
  seatCount: number = TransactionDetails.seatCount
  seats: string[] = TransactionDetails.seats
  passengers: Passenger[] = TransactionDetails.passengers
  totalCost: number = TransactionDetails.totalCost

  source: string = TransactionDetails.source
  destination: string = TransactionDetails.destination
  dTime: string = TransactionDetails.dTime
  aTime: string = TransactionDetails.aTime
  busNo: string = TransactionDetails.busNo
  driverName: string = TransactionDetails.driverName
  driverContact: number = TransactionDetails.driverContact
  pickup: string = TransactionDetails.pickup
  typeOfBus: string = TransactionDetails.typeOfBus
  distance: number = TransactionDetails.distance

  cardNumber: string = TransactionDetails.cardNumber

  custFirstName: string = TransactionDetails.custFirstName
  custLastName: string = TransactionDetails.custLastName
  customerContact: string = TransactionDetails.customerContact
  email: string = TransactionDetails.email

  constructor() { }

  ngOnInit(): void {
    this.passengers.forEach(pass => {
      console.log(pass.PName);
    });
  }

}
