import { tap } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'weather-frontend';
  email : string = 'b@b.pl';
  password : string = 'bbbxax';
  data : Data[] = [];

constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    let payload = {email: this.email, password: this.password}
    this.authService.logInApi(payload).pipe(
      tap( (res : any) => {
      console.log(res.token);
      localStorage.setItem('sesToken', res.token)
      this.getData(res.token)
    })).subscribe();

  }

  getData(token: string)
  {
    this.authService.getData(token).subscribe((res: Data[]) => {
      console.log(res);
      this.data = res;
    })
  }
}

export interface Data {
  id: number;
  measurementValue: any;
  measureDate: Data;
  }

