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

  //To get All the attributes of Bus.
  getBusList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/listbus')
  }

  //To get details of particular Bus.
  getBus(id:number):Observable<Ibus>
  {
    return this.httpclient.get<Ibus>(this.url + '/listbus/'+ id)
  }

  //To add Bus Details
  addBus(busdata:Ibus):Observable<Ibus>
  {
    return this.httpclient.post<Ibus>(this.url + '/addbus',busdata, this.httpOptions)
  }

  



}
