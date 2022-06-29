import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateUserAdminComponent } from '../create-user-admin/create-user-admin.component';
import { DialogGeneralMessageComponent } from '../dialog-general/dialog-general-message/dialog-general-message.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  moduleId: module.id,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public router: Router, public _dialog: MatDialog) { }

  ngOnInit(): void {
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


}
