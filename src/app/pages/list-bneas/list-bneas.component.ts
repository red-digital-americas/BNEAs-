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
      .serviceGeneralGet(`Bnea/GetAllBneasByUser?idUser=${this.user.id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data', this.data);
        }
      });
  }
  pdf(id) {
    console.log('id', id);
    let newVariable: any = window.navigator;
    const filename = `BNEA B00${id}`;
    this.service
      .serviceGeneralGet(`Bnea/GetPDF/${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          console.log('resp doc', resp.message);

          const byteArray = new Uint8Array(
            atob(resp.message)
              .split("")
              .map(char => char.charCodeAt(0))
          );
          const file = new Blob([byteArray], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          if (newVariable && newVariable.msSaveOrOpenBlob) {
            newVariable.msSaveOrOpenBlob(file, filename);
          } else {

            // Construct the 'a' element
            let link = document.createElement("a");
            link.download = filename;
            link.target = "_blank";

            // Construct the URI
            link.href = fileURL;
            document.body.appendChild(link);
            link.click();

            // Cleanup the DOM
            document.body.removeChild(link);
          }
        }
      });


  }
  excel(id) {
    console.log('id', id);
    let newVariable: any = window.navigator;
    const filename = `BNEA B00${id}`;
    this.service
      .serviceGeneralGet(`Bnea/GetReporte/${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          console.log('resp doc', resp.message);

          const byteArray = new Uint8Array(
            atob(resp.message)
              .split("")
              .map(char => char.charCodeAt(0))
          );
          const file = new Blob([byteArray], { type: "application/xls" });
          const fileURL = URL.createObjectURL(file);
          if (newVariable && newVariable.msSaveOrOpenBlob) {
            newVariable.msSaveOrOpenBlob(file, filename);
          } else {

            // Construct the 'a' element
            let link = document.createElement("a");
            link.download = filename;
            link.target = "_blank";

            // Construct the URI
            link.href = fileURL;
            document.body.appendChild(link);
            link.click();

            // Cleanup the DOM
            document.body.removeChild(link);
          }
        }
      });


  }
  deleteBNEA(id) {
    this.service
      .serviceGeneralDelete(`Bnea/DeleteBnea?idBnea=${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.getData();
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Exito",
              body: 'Se elimino correctamente el BNEA',
            },
            width: "350px",
          });
        }
      });
  }
  createBNEAs(id) {
    console.log('Create BNEAs');
    this.router.navigateByUrl(`User/create-BNEAs/${id}`);
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
