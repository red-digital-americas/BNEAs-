import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bneas',
  moduleId: module.id,
  templateUrl: './list-bneas.component.html',
  styleUrls: ['./list-bneas.component.css']
})
export class ListBNEASComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  createBNEAs() {
    console.log('Create BNEAs');
    this.router.navigateByUrl('User/create-BNEAs');
  }

}
