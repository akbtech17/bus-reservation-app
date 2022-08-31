import { Injectable } from '@angular/core';
import { Icustomer } from './icustomer';
import {HttpHeaders} from '@angular/common/http'
import {HttpClient} from '@angular/common/http' //hhtp client object helps with all WEBApi methods
import { Observable } from 'rxjs'; // to work or load single component not whole page or app.


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  url = 'http://localhost:16553/api/customer'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }

  postCustomer(cdata:Icustomer):Observable<Icustomer> {
    console.log("cdata from service", cdata)
    return this.httpclient.post<Icustomer>(this.url+'/',cdata,this.httpOptions)
  }
  loginCustomer(loginInfo:Icustomer):Observable<Icustomer>
 {
  return this.httpclient.post<Icustomer>(this.url + '/validate' ,loginInfo,this.httpOptions);
 }


}
