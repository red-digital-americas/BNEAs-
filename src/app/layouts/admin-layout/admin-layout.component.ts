import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public router: Router){

  }
  public user;
  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem("userData"));
    // if(this.user == null || this.user == undefined){
    //   this.router.navigateByUrl('/login');
    // }
  }
}
