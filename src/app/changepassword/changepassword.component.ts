import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePassQuery : any  = {
    customerId: 0
    
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Password Changed Successfuly")
  }

}
