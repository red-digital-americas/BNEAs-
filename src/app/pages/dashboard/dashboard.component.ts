import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { ServiceGeneralService } from 'app/core/services/service-general.service';
import { DialogGeneralMessageComponent } from '../dialog-general/dialog-general-message/dialog-general-message.component';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public router: Router,
    public routerActive: ActivatedRoute,
    public service: ServiceGeneralService,
    public _dialog: MatDialog) {
  }
  public user;
  public catEmpresa: any[] = []
  public idEmpresa: number;
  public data;
  public dataBnea: any[] = [];
  public totalEntradas = [
    {
      "name": "Coppel",
      "value": 0
    },
    {
      "name": "Afore",
      "value": 0
    },
    {
      "name": "Banco",
      "value": 0
    }
  ];
  public totalMes = [
    {
      "name": "Enero",
      "value": 0
    },
    {
      "name": "Febrero",
      "value": 0
    },
    {
      "name": "Marzo",
      "value": 0
    },
    {
      "name": "Abril",
      "value": 0
    },
    {
      "name": "Mayo",
      "value": 0
    },
    {
      "name": "Junio",
      "value": 0
    },
    {
      "name": "Julio",
      "value": 0
    },
    {
      "name": "Agosto",
      "value": 0
    },
    {
      "name": "Septiembre",
      "value": 0
    },
    {
      "name": "Octubre",
      "value": 0
    },
    {
      "name": "Noviembre",
      "value": 0
    },
    {
      "name": "Diciembre",
      "value": 0
    }
  ];


  // graficas
  view: boolean = false;
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: [
      '#1F4690', '#FFA500', '#FFE5B4', '#3A5BA0', '#035397', '#E8630A', '#FCD900', '#001E6C', '#0F52BA', '#FA8072', '#FFDAB9', '#002366']
  };

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mes';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log('user', this.user);
    this.getCatalogEmpresa();
  }
  getCatalogEmpresa() {
    this.service
      .serviceGeneralGet(`CatEmpresa`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catEmpresa = resp.result;
          console.log('empresa', this.catEmpresa);
        }
      });
  }
  getData(id: number) {
    this.view = false;
    console.log('id de empresa', id);
    // Bnea/GetDatosDash?idEmpresa=1
    this.service
      .serviceGeneralGet(`Bnea/GetDatosDash?idEmpresa=${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.data = resp.result;
          console.log('data', this.data);
          this.totalEntradas = [
            {
              "name": "Coppel",
              "value": this.data.totalEntradaByCoppel
            },
            {
              "name": "Afore",
              "value": this.data.totalEntradaByAfore
            },
            {
              "name": "Banco",
              "value": this.data.totalEntradaByBanco
            }
          ];
          this.totalMes = [
            {
              "name": "Enero",
              "value": this.data.totalByMes.enero
            },
            {
              "name": "Febrero",
              "value": this.data.totalByMes.febrero
            },
            {
              "name": "Marzo",
              "value": this.data.totalByMes.marzo
            },
            {
              "name": "Abril",
              "value": this.data.totalByMes.abril
            },
            {
              "name": "Mayo",
              "value": this.data.totalByMes.mayo
            },
            {
              "name": "Junio",
              "value": this.data.totalByMes.junio
            },
            {
              "name": "Julio",
              "value": this.data.totalByMes.julio
            },
            {
              "name": "Agosto",
              "value": this.data.totalByMes.agosto
            },
            {
              "name": "Septiembre",
              "value": this.data.totalByMes.septiembre
            },
            {
              "name": "Octubre",
              "value": this.data.totalByMes.octubre
            },
            {
              "name": "Noviembre",
              "value": this.data.totalByMes.noviembre
            },
            {
              "name": "Diciembre",
              "value": this.data.totalByMes.diciembre
            }
          ];
          console.log('total mes', this.totalMes);

        }
      });
  }
  getDataBnea(id: number) {
    console.log('id de empresa', id);
    // Bnea/GetAllBneasDash/${this.user.id}
    this.service
      .serviceGeneralGet(`Bnea/GetAllBneasDashAdmin?idEmpresa=${id}`)
      .subscribe((resp) => {
        if (resp.success) {
          this.dataBnea = resp.result;
          console.log('dataBnea', this.dataBnea);
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
  // graficas
  toggleView() {
    setTimeout(() => {
      this.view = true;
      this.rezise();
    }, 1000);
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  rezise() {
    // setTimeout(() => {
    //   this.view = true;
    //   this._services.loader = false;
    // }, 1000);
  }
}

class totalEntradasModel {
  totalEntradaByCoppel: number;
  totalEntradaByBanco: number;
  totalEntradaByAfore: number;
}
