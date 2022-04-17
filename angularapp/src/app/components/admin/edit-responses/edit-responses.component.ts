import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import url from 'src/app/services/url';

@Component({
  selector: 'app-edit-responses',
  templateUrl: './edit-responses.component.html',
  styleUrls: ['./edit-responses.component.css'],
})
export class EditResponsesComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public survey: any,
    private http: HttpClient,
    private dialog: MatDialogRef<EditResponsesComponent>
  ) {}

  question: any;
  ngOnInit(): void {
    this.dialog.backdropClick().subscribe((result) => {
      this.dialog.close(false);
    });
  }

  edit() {
    this.survey.question=this.question;
    this.http
      .put(`${url}/api/survey/edit/${this.survey.surveyId}`, this.survey)
      .subscribe((data: any) => {
        this.dialog.close(true);
      });
  }
  close() {
    this.dialog.close(false);
  }
}
