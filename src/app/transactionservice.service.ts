import { Injectable } from '@angular/core';
import { Itransactionres } from './itransactionres';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipassengerdet } from './ipassengerdet';
import { ICreatetransactionrequest } from './icreatetransactionrequest';

@Injectable({
  providedIn: 'root'
})

export class TransactionserviceService {  

  url='http://localhost:16553/api/transaction'

  httpOptions=  {headers: new HttpHeaders({'Content-type':'application/json'})}

    constructor(private httpclient:HttpClient) { }
    
  getTransactiondet(customerId:number):Observable<Itransactionres>{
    return this.httpclient.get<Itransactionres>(this.url+'/'+customerId)
  }

  getPassenger(tId:number):Observable<Ipassengerdet>{
    return this.httpclient.get<Ipassengerdet>(this.url + '/passengers/' + tId)
  }
  
  createTransaction(req : ICreatetransactionrequest):Observable<any> {
      return this.httpclient.post<any>(this.url,req, this.httpOptions)
  }

  cancelTransaction(tId:number):Observable<any> {
    return this.httpclient.delete<any>(this.url+'/'+tId)
  }
}
