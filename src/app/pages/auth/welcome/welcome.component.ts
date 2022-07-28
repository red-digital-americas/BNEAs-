import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  public interval: any;
  public profile;
  public user;

  constructor(public router: Router, public routerActive: ActivatedRoute,) { }

  ngOnInit() {
    console.log(this.routerActive.snapshot.paramMap.get('id'));
    this.profile = this.routerActive.snapshot.paramMap.get('id');
    this.user = JSON.parse(localStorage.getItem('userData'));

    // this.user = JSON.parse(localStorage.getItem("userData"));
    // console.log("user", this.user);
    if (this.profile == '2') {
      setTimeout(() => {
        this.router.navigateByUrl("Admin");
      }, 2000);
    }
    else if (this.profile == '1') {
      setTimeout(() => {
        this.router.navigateByUrl("User");
      }, 2000);

    }
  }
}
