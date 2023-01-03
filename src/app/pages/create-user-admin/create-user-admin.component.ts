import { Component, Inject, OnInit } from "@angular/core";
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialog as MatDialog,
} from "@angular/material/legacy-dialog";
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceGeneralService } from 'app/core/services/service-general.service';


@Component({
  selector: 'app-create-user-admin',
  templateUrl: './create-user-admin.component.html',
  styleUrls: ['./create-user-admin.component.css'],

})
export class CreateUserAdminComponent implements OnInit {
  public data: UserModel = new UserModel();
  public catArea: any[] = [];
  public catSubdireccion: any[] = [];
  public catNegocio: any[] = [];
  public user;
  public today = new Date();
  public idUser;


  constructor(public service: ServiceGeneralService, public dialogRef: MatDialogRef<CreateUserAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public _dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log('usuario', this.user);
    this.idUser = this.param.id;
    if(this.idUser != 0){
      this.service.serviceGeneralGet(`User/${this.param.id}`).subscribe(resp => {
        if (resp.success) {
          this.data = resp.result;
          console.log('resp', this.data);
        }
      });
    }
    // this.getData(this.param.id);
    this.getCatNegocio();
    this.getCatArea();
    this.getCatSubd();

  }
  // getData(id){
    
  // }
  getCatNegocio() {
    this.service
      .serviceGeneralGet(`CatBusinessUnit`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catNegocio = resp.result;
          console.log('catArea', this.catNegocio);
        }
      });
  }
  getCatArea() {
    this.service
      .serviceGeneralGet(`CatArea`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catArea = resp.result;
          console.log('catArea', this.catArea);
        }
      });
  }
  // CatBusinessUnit
  getCatSubd() {
    this.service
      .serviceGeneralGet(`CatSubDivision`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catSubdireccion = resp.result;
          console.log('catSubdireccion', this.catSubdireccion);
        }
      });
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    if (this.param.id === 0) {
      // this.data.clabTrab = 0;
      // this.data.token = "";
      this.data.password = "admin123";
      // if (this.data.roleId !== 1) {
      //   this.data.branchId = null;
      // }
      console.log('Crear usuario');
      this.addData();
    }
    else {
      console.log('Actualizar Usuario');
      this.updateData();
    }
  }
  addData() {
    this.data.createdBy = this.user.id;
    this.data.createdDate = this.today;
    this.data.updatedBy = this.user.id;
    this.data.updatedDate = this.today;
    this.data.token = 'true';
    console.log('data', this.data);
    this.service.serviceGeneralPostWithUrl('User/CreateUser', this.data).subscribe(resp => {
      if (resp.success) {
        console.log('resp', resp);
        this.dialogRef.close(1);
      }
    }, (error) => {
      this.dialogRef.close(3);
    });
  }


  updateData() {
    console.log('edit user');
    
    // this.dialogRef.close(1);
    this.data.updatedBy = this.user.id;
    this.data.updatedDate = this.today;
    console.log('data', this.data);
    this.service.serviceGeneralPut(`User/Edit_user`, this.data).subscribe(resp => {
      if (resp.success) {
        console.log('resp', resp);
        this.dialogRef.close(2);
      }
    }, (error) => {
      this.dialogRef.close(3);
    });

  }

}

class UserModel{
  id: number;
  email: string;
  password: string;
  name: string;
  token: string;
  idBusinessUnit: number;
  noEmployee: string;
  roleId: number;
  status: number;
  idArea: number;
  idSubDivision: number;
  employeePosition: string;
  createdBy: number;
  createdDate: Date;
  updatedBy: number;
  updatedDate: Date;
}