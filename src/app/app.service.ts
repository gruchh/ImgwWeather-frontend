import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Data } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private header = new HttpHeaders();
  private globalUrl : string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  logInApi(payload: any) {
    return this.httpClient.post(this.globalUrl + '/auth/login', payload)
  }

  getData(token: string): Observable<Data[]> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(this.header);
    return this.httpClient.get<Data[]>(this.globalUrl +'/getSampleWaterMeasures', {'headers': this.header})
  }
}
