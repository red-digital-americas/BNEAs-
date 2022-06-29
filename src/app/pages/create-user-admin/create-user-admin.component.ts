import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user-admin',
  templateUrl: './create-user-admin.component.html',
  styleUrls: ['./create-user-admin.component.css'],

})
export class CreateUserAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateUserAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public _dialog: MatDialog
  ) { }


  ngOnInit(): void {
    console.log('params', this.param);

  }
  close() {
    this.dialogRef.close();
  }
  save() {
    if (this.param.id === 0) {
      // this.data.clabTrab = 0;
      // this.data.token = "";
      // this.data.password = "admin123";
      // if (this.data.roleId !== 1) {
      //   this.data.branchId = null;
      // }
      // console.log('Crear usuario');
      this.addData();
    }
    else {
      console.log('Actualizar Usuario');
      this.updateData();
    }
  }
  addData() {
    // this.data.createdBy = this.user.id;
    // this.data.createdDate = this.today;
    // this.data.updatedBy = this.user.id;
    // this.data.updatedDate = this.today;
    // console.log('data', this.data);
    // this.services.serviceGeneralPostWithUrl('User', this.data).subscribe(resp => {
    //   if (resp.success) {
    //     console.log('resp', resp);
        this.dialogRef.close(1);
    //   }
    // }, (error) => {
    //   this.dialogRef.close(3);
    // });

  }

  updateData() {
    this.dialogRef.close(1);

    // this.data.updatedBy = this.user.id;
    // this.data.updatedDate = this.today;
    // console.log('data', this.data);
    // this.services.serviceGeneralPut(`User/${this.data.id}`, this.data).subscribe(resp => {
    //   if (resp.success) {
    //     console.log('resp', resp);
    //     this.dialogRef.close(2);
    //   }
    // }, (error) => {
    //   this.dialogRef.close(3);
    // });

  }

}
