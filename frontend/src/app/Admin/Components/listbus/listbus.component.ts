import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../../Services/busservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Adminstore } from '../../Models/adminstore';


@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {
 
  Buslist: any[] = []
  constructor(private busservice:BusserviceService, private router: Router, public activatedroute:ActivatedRoute) {
    if(Adminstore.email == '') {
      alert("You are not logged in as Admin!")
      this.router.navigate(['/'])
    }
    this.busservice.getBusList().subscribe(data=>{this.Buslist=data})
   }
  
  ngOnInit(): void {
    
  }
}
