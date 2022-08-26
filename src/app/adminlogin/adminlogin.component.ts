import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Iadmin } from '../iadmin';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  logindata:Iadmin={
    Email:'' ,
    Password: ''
  }
constructor(private loginAuth:AdminserviceService,private router:Router) { }
loginSubmitted(data:Iadmin){
    this.logindata=data
    console.log(this.logindata)
   this.loginAuth.loginUser(this.logindata).subscribe(()=>
   {   
      alert('login unsuccessful')
      this.router.navigate(['/nav'])
  }

  )}
  ngOnInit(): void {
  
  }
  
}
