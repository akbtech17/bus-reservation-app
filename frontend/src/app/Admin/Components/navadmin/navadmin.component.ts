import { Component, OnInit } from '@angular/core';
import { Adminstore } from '../../Classes/adminstore';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})

export class NavadminComponent implements OnInit {
  
  adminName: string = Adminstore.firstName
  
  constructor() { }

  ngOnInit(): void {}
}
