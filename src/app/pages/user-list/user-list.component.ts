import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateUserAdminComponent } from '../create-user-admin/create-user-admin.component';
import { DialogGeneralMessageComponent } from '../dialog-general/dialog-general-message/dialog-general-message.component';
import { ServiceGeneralService } from 'app/core/services/service-general.service';
import { DialogGeneralConfimationComponent } from '../dialog-general/dialog-general-confimation/dialog-general-confimation.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  moduleId: module.id,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public router: Router, public _dialog: MatDialog, public service: ServiceGeneralService,
  ) { }
  public data: any[] = [];
  public catArea: any[] = [];
  public catSubdireccion: any[] = [];
  public area;
  public subdireccion;

  ngOnInit(): void {
    this.getCatArea();
    this.getCatSubd();
    this.data = [];
    this.area;
    this.subdireccion;
  }
  getData(area, subdireccion) {
    if (area != null && subdireccion != null) {
      this.service
        .serviceGeneralGet(`User?area=${area}&subdireccion=${subdireccion}`)
        .subscribe((resp) => {
          if (resp.success) {
            this.data = resp.result;
            console.log('data', this.data);
          }
        });
    }
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
  getNameArea(id) {
    for (let i = 0; i < this.catArea.length; i++) {
      if (this.catArea[i].id == id) {
        return this.catArea[i].area;
      }
    }
  }
  getNameSubdireccion(id) {
    for (let i = 0; i < this.catSubdireccion.length; i++) {
      if (this.catSubdireccion[i].id == id) {
        return this.catSubdireccion[i].subDivision;
      }
    }
  }


  createUser(id: number) {
    console.log('user', id);
    const dialogRef = this._dialog.open(CreateUserAdminComponent, {
      data: {
        id: id,
      },
      width: '40rem',
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
            body: "El Usuario se creo satisfactoriamente.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 2) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "El Usuario se actualizo satisfactoriamente.",
          },
          width: "350px",
        });
        this.ngOnInit();
      } else if (result == 3) {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: "Error al agregar el Usuario.",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });

  }
  deleteUser(id: number) {
    console.log('user', id);
    const dialogRef = this._dialog.open(DialogGeneralConfimationComponent, {
      data: {
        header: "Confirmación para borrar",
        body: "¿Estas seguro de borrar este este usuario?"
      },
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("resp", result);
      // result = si es delete success
      // result = no es no delete
      if (result == 'si') {
        this.service.serviceGeneralDelete(`User/${id}`).subscribe(resp => {
          if (resp.success) {
            const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
              data: {
                header: "Exito",
                body: "El Usuario se elimino correctamente.",
              },
              width: "350px",
            });
            this.ngOnInit();
          }
        });
      }
      else if (result == 'no') {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Ok",
            body: "El usuario no se eliminara",
          },
          width: "350px",
        });
        this.ngOnInit();
      }
    });

  }


}
