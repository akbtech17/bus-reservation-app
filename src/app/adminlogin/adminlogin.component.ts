import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public loginValid = true;
  public email = '';
  public password = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.loginValid = true;
    this.router.navigate(['/AdminNav']);
  }
}
