import { Component, OnInit } from '@angular/core';
import { Bookingpassenger } from '../bookingpassenger';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-passbooked',
  templateUrl: './passbooked.component.html',
  styleUrls: ['./passbooked.component.css']
})
export class PassbookedComponent implements OnInit {
passenger:Passenger[]=[]
  constructor() { }

  ngOnInit(): void {
    this.passenger = Bookingpassenger.passengers
    console.log(this.passenger)
  }

}
