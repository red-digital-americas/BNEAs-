import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { ServiceGeneralService } from 'app/core/services/service-general.service';
import { DialogGeneralMessageComponent } from "../dialog-general/dialog-general-message/dialog-general-message.component";

@Component({
  selector: 'app-list-bneas',
  moduleId: module.id,
  templateUrl: './list-bneas.component.html',
  styleUrls: ['./list-bneas.component.css']
})
export class ListBNEASComponent implements OnInit {
  public user;
  public data: any[] = [];
  public catArea: any[] = [];


  constructor(public router: Router,
    public routerActive: ActivatedRoute,
    public service: ServiceGeneralService,
    public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log('user', this.user);
    this.getData();
    this.catalogsArea();
  }
  catalogsArea() {
    this.service
      .serviceGeneralGet(`CatArea`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catArea = resp.result;
          console.log('area', this.catArea);
        }
      });
  }
  getData() {
    this.service
      .serviceGeneralGet(`Bnea/GetAllBneasDashAdmin/${this.user.id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data', this.data);
        }
      });
  }
  createBNEAs() {
    console.log('Create BNEAs');
    this.router.navigateByUrl('User/create-BNEAs');
  }
  getName(id) {
    if (id != null) {
      id = parseInt(id);
      for (let i = 0; i < this.catArea.length; i++) {
        if (this.catArea[i].id == id) {
          return this.catArea[i].area;
        }
      }
    }
    else {
      return 'S/N';
    }
  }

}
