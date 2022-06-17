import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "app/core/services/login/login.service";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  public email: string;
  closeResult = "";

  constructor(
    public router: Router,
    public service: LoginService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  iniciarSesion() {
    this.router.navigateByUrl("login");
  }

  forgot(email: string) {
    // this.load.presentLoading("Espere..");

    const obj = `?email=${email}`;
    this.service.forgotPassword(obj).subscribe(
      (resp) => {
        if (resp.success) {
          console.log("forgot", resp);
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Exito",
              body: "En breve recibirás un correo para realizar el cambio de contraseña.",
            },
            width: "350px",
          });
        } else {
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
      }
    );
  }
}
