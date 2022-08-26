import { Injectable } from '@angular/core';
import { Iadmin } from './iadmin';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url = 'http://localhost:16553/api/admin'
  httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})}
  constructor(private httpclient:HttpClient) { }

 loginAdmin(loginInfo:Iadmin):Observable<Iadmin>
 {
  return this.httpclient.post<Iadmin>(this.url + '/validate' ,loginInfo,this.httpOptions);
 }

}
