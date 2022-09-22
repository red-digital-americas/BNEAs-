import { Component, Inject, OnInit } from "@angular/core";
import { ServiceGeneralService } from 'app/core/services/service-general.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { DialogChangePasswordComponent } from "../dialog/dialog-change-password/dialog-change-password.component";
import { DialogGeneralMessageComponent } from "../dialog-general/dialog-general-message/dialog-general-message.component";

@Component({
  selector: 'user-cmp',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  styleUrls: ["./user.component.css"],
})

export class UserComponent implements OnInit {
  public data: DataModel = new DataModel();
  public user;
  public catBussinessUnit;
  public catArea;
  public catSubDivision;


  constructor(
    public router: Router,
    public routerActive: ActivatedRoute,
    public service: ServiceGeneralService,
    public _dialog: MatDialog
  ) { }
  ngOnInit() {
    this.catalogsBussiness();
    this.catalogsArea();
    this.catalogsSubDireccion();


    this.user = JSON.parse(localStorage.getItem('userData'));
    this.service
      .serviceGeneralGet(`User/${this.user.id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log(this.data);
        }
      });
    console.log('sin data');
  }
  catalogsBussiness() {
    this.service
      .serviceGeneralGet(`CatEmpresa`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catBussinessUnit = resp.result;
          console.log('bussiness', this.catBussinessUnit);
        }
      });
  }
  catalogsArea() {
    this.service
      .serviceGeneralGet(`CatArea`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catArea = resp.result;
          console.log('area', this.catArea);
        }
      });
  }
  catalogsSubDireccion() {
    this.service
      .serviceGeneralGet(`CatSubDivision`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catSubDivision = resp.result;
          console.log('area', this.catSubDivision);
        }
      });
  }
  changePassword(email) {
    console.log('email', email);
    const dialogRef = this._dialog.open(DialogChangePasswordComponent, {
      data: {
        correo: email,
      },
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("resp", result);
      // result = 1 es add success
      // result = 2 es update success
      // result = 3 es add o update false
      if (result == 1) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "La contraseña se creo satisfactoriamente.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 2) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "La contraseña se actualizo satisfactoriamente.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 3) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: "Error al cambiar la contraseña.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });


  }
  getArea(id) {
    this.catArea.forEach(element => {
      if (element.idBusinessUnit == id) {
        return element.area;
      }
    });
  }
  update() {
    this.data.password == '';
    if (this.data.token === null) {
      this.data.token = '';
    }
    this.service
      .serviceGeneralPut('User/Edit_user', this.data)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log('actualizacion', this.data);
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Exito",
              body: "Se actualizo correctamente la información del usuario",
            },
            width: "350px",
          });
          // localStorage.setItem("userData", JSON.stringify(this.data));
          this.ngOnInit();
        }
        else {
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Error",
              body: resp.message,
            },
            width: "350px",
          });
        }
      },
        (error) => {
          console.log(error);
        });
  }
}

class DataModel {
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