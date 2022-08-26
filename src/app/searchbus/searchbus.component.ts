import { Component, OnInit } from '@angular/core';
import { Isearchbus } from '../isearchbus';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
  searchquery: Isearchbus = {
    "source" : "",
    "destination" : "",
    "dDate" : "",
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("searching bus for"+ this.searchquery.source);
  }

}
