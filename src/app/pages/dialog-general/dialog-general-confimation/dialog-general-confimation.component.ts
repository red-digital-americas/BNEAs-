import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: 'app-dialog-general-confimation',
  templateUrl: './dialog-general-confimation.component.html',
  styleUrls: ['./dialog-general-confimation.component.css']
})
export class DialogGeneralConfimationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogGeneralConfimationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  public header: string = "";
  public body: string = "";
  ngOnInit(): void {
    this.header = this.data.header;
    this.body = this.data.body;
  }
  close() {
    this.dialogRef.close();
  }
  yes() {
    this.dialogRef.close('si');
  }
  no() {
    this.dialogRef.close('no');
  }

}
export interface DialogData {
  header: string;
  body: string;
}
