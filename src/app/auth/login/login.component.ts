import { BehaviorSubject, tap } from 'rxjs';
import { AuthService, Data } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = 'b@b.pl';
  password : string = 'bbbxax';

constructor(private authService: AuthService) { }

ngOnInit() {
}

logCommand() {
  this.authService.login(this.email, this.password);
}

  }

