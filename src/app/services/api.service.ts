import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Apiurl = 'http://192.168.1.8:5267/api/'
  
  constructor(private httpClient: HttpClient) { }

  loginValidationService(obj: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.httpClient.post<any>(this.Apiurl + "Login/loginreq", obj, { headers: reqHeader });
  }
}
