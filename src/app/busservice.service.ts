import { Injectable } from '@angular/core';
import { Ibus } from './ibus'; //importing interface
import {HttpClient, HttpHeaders} from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.


@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  url = 'http://localhost:30263/api/bus'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  //To get All the attributes of Bus Controller
  getBusList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/listbus')
  }

}
