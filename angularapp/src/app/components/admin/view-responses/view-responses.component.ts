import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-view-responses',
  templateUrl: './view-responses.component.html',
  styleUrls: ['./view-responses.component.css'],
})
export class ViewResponsesComponent implements OnInit {
  panelOpenState = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public survey: any,
    private dialog: MatDialogRef<ViewResponsesComponent>
  ) {}

  ngOnInit(): void {}
  close() {
    this.dialog.close();
  }
}
