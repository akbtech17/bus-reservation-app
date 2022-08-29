import { Injectable } from '@angular/core';
import { Itransaction } from './itransaction';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {
url='http://localhost:16533/api/transaction'
httpOptions=  {headers: new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }
  
getTransactiondetails(pId:number):Observable<Itransaction>{
  return this.httpclient.get<Itransaction>(this.url+'/'+pId)
}
}
