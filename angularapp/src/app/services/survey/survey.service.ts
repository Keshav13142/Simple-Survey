import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import url from '../url';
import { Survey } from './Survey';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  public createSurvey(survey: Survey) {
    this.http.post(`${url}/api/survey/add`, survey).subscribe(
      (data) => {
        this.snack.open('Created Survey Sucessfully', 'OK', { duration: 2000 });
      },
      (error) => {
        this.snack.open('Something went Wrong', 'OK', { duration: 2000 });
      }
    );
  }
  public checkUrl(link: any): any {
    console.log(link);

    this.http.post(`${url}/api/survey/checkUrl`, link).subscribe(
      (data) => {
        console.log(data);
        return data;
      },
      (error) => {
        return null;
      }
    );
    return null;
  }

  public getAllSurveys() {
    return this.http.get(`${url}/api/survey`);
  }

  public deleteSurvey(id: any): boolean {
    let status = false;
    this.http.delete(`${url}/api/survey/delete/${id}`).subscribe((data) => {
      status = true;
      return status;
    });
    return status;
  }
}
