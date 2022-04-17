import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import url from '../url';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private snack: MatSnackBar
  ) {}

  public validate(login: Login) {
    this.http
      .post(`${url}/login?email=${login.email}&pass=${login.password}`, null)
      .subscribe(
        (data) => {
          this.snack.open('Logged In', 'OK', { duration: 1500 });
          localStorage.setItem('status', 'true');
          this.router.navigate(['admin/dashboard']);
        },
        (error) => {
          this.snack.open('Invalid Credentials', 'OK', { duration: 2000 });
        }
      );
  }
}
