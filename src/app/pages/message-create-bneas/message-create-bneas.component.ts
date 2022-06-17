import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "app/core/services/login/login.service";
import { DialogGeneralMessageComponent } from "app/pages/dialog-general/dialog-general-message/dialog-general-message.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-message-create-bneas",
  templateUrl: "./message-create-bneas.component.html",
  styleUrls: ["./message-create-bneas.component.css"],
})
export class MessageCreateBneasComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public message: any;
  public dataProfile: any;
  public validar = false;
  public disabled = false;
  constructor(
    public router: Router,
    public service: LoginService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  close() {
    this.router.navigateByUrl("dashboard");
  }
  entrar() {
    this.router.navigateByUrl("dashboard");
  }

  signUp() {
    this.router.navigateByUrl("create-user");
  }
}
