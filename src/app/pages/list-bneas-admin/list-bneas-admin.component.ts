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
  selector: 'app-list-bneas-admin',
  moduleId: module.id,
  templateUrl: './list-bneas-admin.component.html',
  styleUrls: ['./list-bneas-admin.component.css']
})
export class ListBneasAdminComponent implements OnInit {
  public user;
  public data: any[] = [];
  public catEmpresa: any[] = [];
  public catArea: any[] = [];
  public idEmpresa: number;


  constructor(public router: Router,
    public routerActive: ActivatedRoute,
    public service: ServiceGeneralService,
    public _dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log('user', this.user);
    // this.getData();
    this.catalogsEmpresa();
    this.catalogsArea();
  }
  catalogsEmpresa(){
    this.service
      .serviceGeneralGet(`CatEmpresa`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catEmpresa = resp.result;
          console.log('empresa', this.catEmpresa);
        }
      });
  }
  catalogsArea() {
    this.service
      .serviceGeneralGet(`CatArea`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catArea = resp.result;
          console.log('catArea', this.catArea);
        }
      });
  }
  getData(id: number) {
    console.log('id de empresa', id);
    // Bnea/GetAllBneasDash/${this.user.id}
    this.service
      .serviceGeneralGet(`Bnea/GetAllBneasDashAdmin?idEmpresa=${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data', this.data);
        }
      });
  }
  deleteBNEA(id) {
    this.service
      .serviceGeneralDelete(`Bnea/DeleteBnea?idBnea=${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          // this.getData();
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
          const file = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
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
  createBNEAs(id) {
    console.log('Create BNEAs admin');
    this.router.navigateByUrl(`Admin/create-BNEAs-admin/${id}`);
  }
  getName(id) {
    if (id != null) {
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
