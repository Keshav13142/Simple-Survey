import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Response } from 'src/app/services/response/Response';
import { Survey } from 'src/app/services/survey/Survey';
import { SurveyService } from 'src/app/services/survey/survey.service';
import url from 'src/app/services/url';
import { EditResponsesComponent } from '../edit-responses/edit-responses.component';
import { ViewResponsesComponent } from '../view-responses/view-responses.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  responses!: Response[];
  survey: Survey = {
    question: '',
    url: '',
    responses: this.responses,
  };
  surveys!: Survey[];
  uniqueKey: any;
  constructor(
    private surveyService: SurveyService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSurveys();
  }

  createSurvey() {
    function dec2hex(dec: any) {
      return dec.toString(16).padStart(2, '0');
    }

    function generateId(len: any) {
      var arr = new Uint8Array((len || 40) / 2);
      window.crypto.getRandomValues(arr);
      return Array.from(arr, dec2hex).join('');
    }
    this.uniqueKey = generateId(null);
    this.survey.url = `http://localhost:4200/${this.uniqueKey}`;
    this.surveyService.createSurvey(this.survey);
    this.getSurveys();
  }
  getSurveys() {
    this.surveyService.getAllSurveys().subscribe(
      (data: any) => {
        this.surveys = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  view(s: any) {
    this.dialog.open(ViewResponsesComponent, {
      data: s,
      maxWidth: '120vh',
      maxHeight: '100vh',
    });
  }
  edit(s: any) {
    const dialogRef = this.dialog.open(EditResponsesComponent, { data: s });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getSurveys();
        this.snack.open('Updated Survey Sucessfully', 'OK', { duration: 2000 });
      }
    });
  }
  delete(s: any) {
    this.http.delete(`${url}/api/survey/delete/${s.surveyId}`).subscribe(
      (data) => {
        this.snack.open('Deleted Survey Sucessfully', 'OK', { duration: 2000 });
        this.getSurveys();
      },
      (error) => {
        this.snack.open('Something Went Wrong', 'OK', { duration: 2000 });
      }
    );
  }
}
