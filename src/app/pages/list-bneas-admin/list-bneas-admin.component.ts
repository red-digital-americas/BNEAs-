import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bneas-admin',
  moduleId: module.id,
  templateUrl: './list-bneas-admin.component.html',
  styleUrls: ['./list-bneas-admin.component.css']
})
export class ListBneasAdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  createBNEAs() {
    console.log('Create BNEAs admin');
    this.router.navigateByUrl('Admin/create-BNEAs-admin');
  }

}
