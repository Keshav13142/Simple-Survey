import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Response } from 'src/app/services/response/Response';
import { Survey } from 'src/app/services/survey/Survey';
import { SurveyService } from 'src/app/services/survey/survey.service';
import url from 'src/app/services/url';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private snack: MatSnackBar
  ) {}

  responses!: Response[];
  response!: Response;
  survey: Survey = {
    question: '',
    url: '',
    responses: this.responses,
  };
  ngOnInit(): void {
    this.response = {
      name: '',
      answer: '',
      email: '',
    };
    this.checkUrl();
  }

  checkUrl() {
    this.http
      .post(`${url}/api/survey/checkUrl`, window.location.href)
      .subscribe(
        (data: any) => {
          this.survey = data;
        },
        (error) => {
          console.log('no url');
          this.router.navigate(['/notFound']);
        }
      );
  }

  submitResponse() {
    this.survey.responses.push(this.response);
    console.log(this.survey.responses);

    this.http.put(`${url}/api/survey/saveResponse`, this.survey).subscribe(
      (data) => {
        Swal.fire({
          title: 'Response Submitted',
          text: 'Thank you for answering the questions',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Submit Another Response',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else this.router.navigate(['success']);
        });
      },
      (error) => {
        this.snack.open('Something Went Wrong', 'OK', {
          duration: 2000,
        });
        console.log(error);
      }
    );
  }
}
