import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  public interval: any;
  public user;
  constructor(public router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log("user", this.user);

    setTimeout(() => {
      this.router.navigateByUrl("");
    }, 2000);
  }
}
