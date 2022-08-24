import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.loginValid = true;
  }
}
