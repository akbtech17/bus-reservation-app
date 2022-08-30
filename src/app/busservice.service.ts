import { Injectable } from '@angular/core';
import { Ibus } from './ibus'; //importing interface
import {HttpHeaders} from '@angular/common/http'
import {HttpClient} from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.
import { Isearchbus } from './isearchbus';


@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  url = 'http://localhost:16553/api/bus'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  //To get All the attributes of Bus.
  getBusList():Observable<any>{
 
    return this.httpclient.get<any[]>(this.url+'/')
  }

  //To get details of particular Bus.
  
  getBus(busId:number):Observable<Ibus>
  {
    console.log(busId);
    return this.httpclient.get<Ibus>(this.url + '/'+ busId)
    
  }

  //To add Bus Details
  addBus(busdata:Ibus):Observable<Ibus>
  {
    return this.httpclient.post<Ibus>(this.url + '/addbus',busdata, this.httpOptions)
  }

  //To edit Bus Details
  editBus(busdata:Ibus):Observable<Ibus>
  {
    return this.httpclient.put<Ibus>(this.url + '/editbus/' + busdata.busId,busdata, this.httpOptions)
  }

  //To delete the Bus Details
  deleteBus(busdata:Ibus):Observable<Ibus>
  {
    console.log("Hello")
    return this.httpclient.delete<Ibus>(this.url + '/deletebus/'+ busdata.busId, this.httpOptions)
  }

  // to search the avb buses
  searchBuses(searchquery:Isearchbus):Observable<any>
  {
    console.log(searchquery);
    return this.httpclient.post<any[]>(this.url + '/search', searchquery, this.httpOptions);
  }

   avbSeates(busId:number):Observable<any>
   {
     return this.httpclient.get<any>(this.url + '/seatsavb/' + busId)
  }

}
