import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-dialog-general-message",
  templateUrl: "./dialog-general-message.component.html",
  styleUrls: ["./dialog-general-message.component.css"],
})
export class DialogGeneralMessageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogGeneralMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  public header: string = "";
  public body: string = "";

  ngOnInit(): void {
    this.header = this.data.header;
    this.body = this.data.body;
  }
  close(){
    this.dialogRef.close();
  }
}
export interface DialogData {
  header: string;
  body: string;
}
