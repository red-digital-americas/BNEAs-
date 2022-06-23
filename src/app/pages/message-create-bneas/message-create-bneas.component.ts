import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
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
  public profile;

  constructor(
    public router: Router,
    public service: LoginService,
    public routerActive: ActivatedRoute,
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.routerActive.snapshot.paramMap.get('id'));
    this.profile = this.routerActive.snapshot.paramMap.get('id');

  }

  close() {
    if (this.profile == '1') {
      this.router.navigateByUrl("Admin/list-bneas-admin");
    }
    else if (this.profile == '2') {
      this.router.navigateByUrl("User/list-BNEAs");
    }
  }
  entrar() {
    // this.user = JSON.parse(localStorage.getItem("userData"));
    // console.log("user", this.user);
    if (this.profile == '1') {
      this.router.navigateByUrl("Admin/list-bneas-admin");
    }
    else if (this.profile == '2') {
      this.router.navigateByUrl("User/list-BNEAs");
    }
  }

  signUp() {
    this.router.navigateByUrl("create-user");
  }
}
