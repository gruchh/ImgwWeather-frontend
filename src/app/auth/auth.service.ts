import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Data } from './login/login.component';
import {FormsModule} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private header = new HttpHeaders();
  private globalUrl : string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  logInApi(payload: any) {
    return this.httpClient.post(this.globalUrl + '/auth/login', payload)
  }

  getData(token: string): Observable<Data[]> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    return this.httpClient.get<Data[]>(this.globalUrl +'/getSampleWaterMeasures', {'headers': this.header})
  }

}
