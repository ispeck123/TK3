import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Apiurl = 'http://103.13.113.132:7890/'

  constructor() { }
  // constructor(private httpClient: HttpClient) { }


  // loginValidationService(obj: any): Observable<any> {
  //   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  //   return this.httpClient.post<any>(this.Apiurl + "user/login/otp/verification", obj, { headers: reqHeader });
  // }
}
