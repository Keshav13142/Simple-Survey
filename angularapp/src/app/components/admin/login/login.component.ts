import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/loginService/login';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    password: '',
  };
  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('status') == 'true')
      this.router.navigate(['admin/dashboard']);
  }

  validate() {
    this.loginService.validate(this.login);
  }
}
