import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "app/core/services/login/login.service";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public message: any;
  public dataProfile: any;
  public validar = false;
  public disabled = false;
  public errorLogin = false;

  constructor(
    public router: Router,
    public service: LoginService,
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void { }
  forgotPassword() {
    console.log("forgot password");
    this.router.navigateByUrl("recuperar-contrasena");
  }
  login(correo, contrasena) {
    this.disabled = true;
    const loginObj = `?email=${correo}&password=${contrasena}`;
    this.service.login(loginObj).subscribe(
      (resp) => {
        if (resp.success) {
          this.dataProfile = resp.result;
          // this.load.presentLoading("Iniciando sesion..");
          console.log("data profile", this.dataProfile);
          this.disabled = false;
          localStorage.setItem("userData", JSON.stringify(this.dataProfile));

          this.router.navigateByUrl("bienvenido");
        } else {
          console.log("data error", resp);
          this.disabled = false;
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Error",
              body: resp.message,
            },
            width: "350px",
          });

          // this.generalMessage(resp.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  entrar() {
    if (this.email === 'admin') {
      this.errorLogin = false;
      this.router.navigateByUrl("bienvenido/1");

    }
    else if (this.email === 'usuario') {
      this.errorLogin = false;
      this.router.navigateByUrl("bienvenido/2");
    }
    else {
      this.errorLogin = true;
    }
  }
  close() {
    this.errorLogin = false;

  }

  signUp() {
    this.router.navigateByUrl("create-user");
  }
}
