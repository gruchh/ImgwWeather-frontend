import { BehaviorSubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  title = 'weather-frontend';
  data : Data[] = [];

  private _isLogged = new BehaviorSubject<boolean>(false);
  isLogged = this._isLogged.asObservable();

  constructor(private apiService : ApiService) {
    const token = localStorage.getItem('sesToken_auth');
    this._isLogged.next(!!token);
  }

  login(email : string, password : string) {
    let payload = {email, password}

    this.apiService.logInApi(payload).pipe(
      tap( (res : any) => {
      console.log(res.token);
      localStorage.setItem('sesToken_auth', res.token);
      this._isLogged.next(true);
      this.getData(res.token)
    })).subscribe();
  }

  getData(token: string)
  {
    this.apiService.getData(token)
  }
}


export interface Data {
  id: number;
  measurementValue: any;
  measureDate: Data;
  }
