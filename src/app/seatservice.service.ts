import { Injectable } from '@angular/core';
import { BusserviceService } from './busservice.service';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'; //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.


@Injectable({
  providedIn: 'root'
})
export class SeatserviceService {
  url = 'http://localhost:16553/api/bus/seatdetails';

  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  getseats(busId:number):Observable<any>{
  
    console.log(busId);
    return this.httpclient.get<any[]>(this.url + '/' + busId)
    
  }
 

  
}
