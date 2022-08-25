import { Injectable } from '@angular/core';
import { Iadmin } from './iadmin';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url = 'http://localhost:16553/api/admin/email?password='
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }
 //Get Details of Particular Admin.
 getAdmin(id:number):Observable<Iadmin>
 {
  return this.httpclient.get<Iadmin>(this.url + '/list/' + id);
 }

}
