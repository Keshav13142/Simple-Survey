import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import url from 'src/app/services/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  code: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  checkUrl() {
    this.http
      .post(`${url}/api/survey/checkUrl`, `http://localhost:4200/${this.code}`)
      .subscribe(
        (data: any) => {
          this.router.navigate([this.code]);
        },
        (error) => {
          console.log('no url');
          this.router.navigate(['/notFound']);
        }
      );
  }
}
