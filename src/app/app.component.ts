import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-frontend';
  email : string = 'b@b.pl';
  password : string = 'bbbxax';
  data : Data[] = [];


constructor(private appService: AppService) { }

login() {
  let payload = {email: this.email, password: this.password}
  this.appService.logInApi(payload).subscribe( (res : any) => {
    this.getData(res.token)
  });

}

getData(token: string)
{
  this.appService.getData(token).subscribe((res: Data[]) => {
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
