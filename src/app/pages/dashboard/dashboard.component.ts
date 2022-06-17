import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.scss']

})

export class DashboardComponent implements OnInit {

  constructor(
    public router: Router,
    // public service: LoginService,
    // public _dialog: MatDialog,
  ) { }
  ngOnInit() { }

  createBNEAs(){
    console.log('Create BNEAs');
    this.router.navigateByUrl('create-BNEAs');
  }
}
