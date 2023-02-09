import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  header = new HttpHeaders();
  globalUrl : string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  logInApi(payload: any) {
    return this.httpClient.post(this.globalUrl + '/auth/login', payload)
  }

  getData(token: string): Observable<any[]> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    return this.httpClient.get<any[]>(this.globalUrl +'/getSampleWaterMeasures', {'headers': this.header})
  }
}




