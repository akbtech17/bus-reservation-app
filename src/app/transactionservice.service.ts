import { Injectable } from '@angular/core';
import { Itransactionres } from './itransactionres';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransactionserviceService {  

url='http://localhost:16553/api/transaction'

httpOptions=  {headers: new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient:HttpClient) { }
  
getTransactiondet(customerId:number):Observable<Itransactionres>{

  console.log(customerId)
  return this.httpclient.get<Itransactionres>(this.url+'/'+customerId)
}
}
