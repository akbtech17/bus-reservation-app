import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {
  adminName: string = ""
  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    var data = this.activatedroute.snapshot.paramMap.get('adminName')
    if(data != null) this.adminName = data.toString();
    console.log("Admin Name is" + this.adminName);
  }

}
