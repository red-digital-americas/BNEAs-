import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { ServiceGeneralService } from "app/core/services/service-general.service";
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
} from "@angular/material/legacy-dialog";
import { DialogGeneralMessageComponent } from 'app/pages/dialog-general/dialog-general-message/dialog-general-message.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-create-bnea-admin',
  moduleId: module.id,
  templateUrl: './create-bnea-admin.component.html',
  styleUrls: ['./create-bnea-admin.component.css']
})
export class CreateBneaAdminComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    idTipoBnea: ['', Validators.required],
    idUser: ['', Validators.required],
    idBnea: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    nombreLider: ['', Validators.required],
    deptoLider: ['', Validators.required],
    idRolTrabajo: ['', Validators.required],
    nombreRecibe: ['', Validators.required],
    deptoRecibe: ['', Validators.required],
    idRolTrabajoRecibe: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    nombreProyecto: ['', Validators.required],
    area: ['', Validators.required],
    descripcion: ['', Validators.required],
    idEmpresa: ['', Validators.required],

  });
  fourFormGroup = this._formBuilder.group({
    situacion: ['', Validators.required],
    indicadores: ['', Validators.required],
    descripcion: ['', Validators.required],
    idEmpresa: ['', Validators.required],
    alcance: ['', Validators.required],
  });
  fiveFormGroup = this._formBuilder.group({
    alcance: ['', Validators.required],
    beneficios: ['', Validators.required],
  });
  sixFormGroup = this._formBuilder.group(
    [
      {
        complete: ['', Validators.required],
      }
    ]
  );
  sevenFormGroup = this._formBuilder.group({
    desarrollo: [''],
    desarolloCant: [''],
    desarolloEsp: [''],
    servidor: [''],
    servidorCant: [''],
    servidorEsp: [''],
    licenciaTer: [''],
    licenciaTerCant: [''],
    licenciaTerEsp: [''],
    mobiliario: [''],
    mobiliarioCant: [''],
    mobiliarioEsp: [''],
    equipo: [''],
    equipoCant: [''],
    equipoEsp: [''],
    edificio: [''],
    edificioCant: [''],
    edificioEsp: [''],
    licencia: [''],
    licenciaCant: [''],
    licenciaEsp: [''],
    terreno: [''],
    terrenoCant: [''],
    terrenoEsp: [''],
    silla: [''],
    sillaCant: ['', Validators.required],
    sillaEsp: ['', Validators.required],
    otro: [''],
    otroCant: ['', Validators.required],
    otroEsp: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    idBnea: [''],
    desarrolloProv: [''],
    desarrolloProvP: [''],
    servidor: [''],
    servidorP: [''],
    licenciaTercero: [''],
    licenciaTerceroP: [''],
    mobiliario: [''],
    mobiliarioP: [''],
    desarrolloSoft: [''],
    desarrolloSoftP: [''],
    horas: [''],
    horasP: [''],
    equipo: [''],
    equipoP: [''],
    edificio: [''],
    edificioP: [''],
    licencia: [''],
    licenciaP: [''],
    terreno: [''],
    terrenoP: [''],
    silla: [''],
    sillaP: [''],
    otro: [''],
    otroP: [''],
  });
  nineFormGroup = this._formBuilder.group({
    margenComer: [''],
    margenComerCant: ['', Validators.required],
    margenComerEsp: ['', Validators.required],
    magenFin: [''],
    margenFinCant: ['', Validators.required],
    margenFinEsp: ['', Validators.required],
    reduccion: [''],
    reduccionCant: ['', Validators.required],
    reduccionEsp: ['', Validators.required],
    volumen: [''],
    volumenCant: ['', Validators.required],
    volumenEsp: ['', Validators.required],
    ingresos: [''],
    ingresosCant: ['', Validators.required],
    ingresosEsp: ['', Validators.required],
  });
  tenFormGroup = this._formBuilder.group({
    idBnea: [''],
    mantEquipos: [''],
    mantEquiposCant: [''],
    mantEquiposEsp: [''],
    mantEquiposPor: [''],
    soporte: [''],
    soporteCant: [''],
    soporteEsp: [''],
    soportePor: [''],
    plantas: [''],
    plantasCant: [''],
    plantasEsp: [''],
    plantasPor: [''],
    renta: [''],
    rentaCant: [''],
    rentaEsp: [''],
    rentaPor: [''],
    combustible: [''],
    combustibleCant: [''],
    combusitibleEsp: [''],
    combustiblePor: [''],
    energia: [''],
    energiaCant: [''],
    energiaEsp: [''],
    energiaPor: [''],
    suministro: [''],
    suministroCant: [''],
    suministroEsp: [''],
    suministroPor: [''],
    multa: [''],
    multaCant: [''],
    multaEsp: [''],
    multaPor: [''],
    mantComputo: [''],
    mantComputoCant: [''],
    mantComputoEsp: [''],
    mantComputoPor: [''],
    mantTrans: [''],
    mantTransCant: [''],
    mantTransEsp: [''],
    mantTransPor: [''],
    mantTecno: [''],
    mantTecnoCant: [''],
    mantTecnoEsp: [''],
    mantTecnoPor: [''],
    licencia: [''],
    licenciaCant: [''],
    licenciaEsp: [''],
    licenciaPor: [''],
    soporteSoft: [''],
    soporteSoftCant: [''],
    soporteSoftEsp: [''],
    soporteSoftPor: [''],
    consultoria: [''],
    consultoriaCant: [''],
    consultoriaEsp: [''],
    consultoriaPor: [''],
    incremento: [''],
    incrementoCant: [''],
    incrementoEsp: [''],
    incrementoPor: [''],
    decremento: [''],
    decrementoCant: [''],
    decrementoEsp: [''],
    decrementoPor: [''],
    utilizacion: [''],
    utilizacionCant: [''],
    utilizacionEsp: [''],
    utilizacionPor: [''],
  });
  elevenFormGroup = this._formBuilder.group({
    idBnea: [''],
    recurso: ['', Validators.required],
    tramiteMensual: ['', Validators.required],
    tiempoPromedio: ['', Validators.required],
    tazaError: ['', Validators.required],
    tiempoCorrecion: ['', Validators.required],
    transacciones: ['', Validators.required],
    reducionTiempo: ['', Validators.required],
  });
  twenFormGroup = this._formBuilder.group({
    idBnea: [''],
    espacioFisico: [''],
    agua: [''],
    cfe: [''],
    internet: [''],
    flipper: [''],
    silla: [''],
    archivero: [''],
    mampara: [''],
    computador: [''],
    servidor: [''],
  });
  thirteenFormGroup = this._formBuilder.group(
    [
      {
        complete: ['', Validators.required],
      }
    ]
  );
  fourteenFormGroup = this._formBuilder.group(
    [
      {
        complete: ['', Validators.required],
      }
    ]
  );

  public user;
  public data;
  public idBNEA;
  public beneficit: any[] = [];
  public documento: any[] = [];
  public hito: any[] = [];
  public today = new Date();
  public team: any[] = [];
  public cTypeBnea: any[] = [];
  public cEmpresa: any[] = [];
  public cRol: any[] = [];
  public cRolReciber: any[] = [];

  public cRecurso: any[] = [];
  public step7Data: Step7Model = new Step7Model();
  public step8Data: Step8Model = new Step8Model();
  public createStep8 = false;
  public step9Data: Step9Model = new Step9Model();
  public createStep9 = false;
  public step10Data: Step10Model = new Step10Model();
  public createStep10 = false;
  public step11Data: Step11Model = new Step11Model();
  public createStep11 = false;
  public step12Data: Step12Model = new Step12Model();
  public createStep12 = false;
  public step13Data: Step13Model = new Step13Model();
  public createStep13 = false;
  public createStep14 = false;
  public createStep6 = false;
  public createStep7 = false;


  constructor(private _formBuilder: FormBuilder, public router: Router, public service: ServiceGeneralService, public routerActive: ActivatedRoute, public _dialog: MatDialog, private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    console.log('user', this.user);

    this.idBNEA = this.routerActive.snapshot.paramMap.get('id');
    console.log(`id BNEA ${this.idBNEA}`);
    this.getCatTypeBnea();
    this.getCatEmpresa();
    this.getCatRole();
    this.getCatRecurso();
    if (this.idBNEA == 0) {
      this.firstFormGroup = this._formBuilder.group({
        idTipoBnea: ['', Validators.required],
        idUser: [this.user.id, Validators.required],
        idBnea: [0, Validators.required],
      });
    } else {
      this.getData(this.idBNEA);
    }
  }
  getData(id) {
    console.log('id', id);
    this.service.serviceGeneralGet(`Bnea/GetAllInfoByBnea/${id}`).subscribe(resp => {
      if (resp.success) {
        this.data = resp.result;
        console.log('data bnea', this.data);
        // pasos(
        this.beneficit = [];
        this.getDataStep6();
        this.getDataStep7();
        this.getDataStep8();
        this.getDataStep9();
        this.getDataStep10();
        this.getDataStep11();
        this.getDataStep12();
        this.getDataStep13();
        this.getDataStep14();

        this.firstFormGroup = this._formBuilder.group({
          idTipoBnea: [this.data.bnea.idTipoBnea, Validators.required],
          idUser: [this.user.id, Validators.required],
          idBnea: [this.data.bnea.id, Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
          nombreLider: [this.data.bnea.nombreLider, Validators.required],
          deptoLider: [this.data.bnea.departamento, Validators.required],
          idRolTrabajo: [this.data.bnea.idRolTrabajo, Validators.required],
          nombreRecibe: [this.data.bnea.nombreRecibe, Validators.required],
          deptoRecibe: [this.data.bnea.departamentoRecibe, Validators.required],
          idRolTrabajoRecibe: [this.data.bnea.idRolTrabajoRecibe, Validators.required],
        });
        this.thirdFormGroup = this._formBuilder.group({
          nombreProyecto: [this.data.bnea.nombreProyecto, Validators.required],
          area: [this.data.bnea.departamentoRel, Validators.required],
          descripcion: [this.data.bnea.descripcionProyecto, Validators.required],
          idEmpresa: [this.data.bnea.idEmpresa, Validators.required],
        });
        this.fourFormGroup = this._formBuilder.group({
          situacion: [this.data.bnea.situacionActual, Validators.required],
          indicadores: [this.data.bnea.indicadorObjetivo, Validators.required],
          descripcion: [this.data.bnea.descripcionResultado, Validators.required],
          alcance: [this.data.bnea.alcanceIniciativa, Validators.required],
        });
        this.fiveFormGroup = this._formBuilder.group({
          alcance: [this.data.bnea.fueraAlcance, Validators.required],
          beneficios: [this.data.bnea.beneficiosIniciativa, Validators.required],
        });
        this.sevenFormGroup = this._formBuilder.group({
          desarrollo: [this.data.bneaPaso7.desarrollo],
          desarolloCant: [this.data.bneaPaso7.desarolloCant],
          desarolloEsp: [this.data.bneaPaso7.desarolloEsp],
          servidor: [this.data.bneaPaso7.servidor],
          servidorCant: [this.data.bneaPaso7.servidorCant],
          servidorEsp: [this.data.bneaPaso7.servidorEsp],
          licenciaTer: [this.data.bneaPaso7.licenciaTer],
          licenciaTerCant: [this.data.bneaPaso7.licenciaTerCant],
          licenciaTerEsp: [this.data.bneaPaso7.licenciaTerEsp],
          mobiliario: [this.data.bneaPaso7.mobiliario],
          mobiliarioCant: [this.data.bneaPaso7.mobiliarioCant],
          mobiliarioEsp: [this.data.bneaPaso7.mobiliarioEsp],
          equipo: [this.data.bneaPaso7.equipo],
          equipoCant: [this.data.bneaPaso7.equipoCant],
          equipoEsp: [this.data.bneaPaso7.equipoEsp],
          edificio: [this.data.bneaPaso7.edificio],
          edificioCant: [this.data.bneaPaso7.edificioCant],
          edificioEsp: [this.data.bneaPaso7.edificioEsp],
          licencia: [this.data.bneaPaso7.licencia],
          licenciaCant: [this.data.bneaPaso7.licenciaCant],
          licenciaEsp: [this.data.bneaPaso7.licenciaEsp],
          terreno: [this.data.bneaPaso7.terreno],
          terrenoCant: [this.data.bneaPaso7.terrenoCant],
          terrenoEsp: [this.data.bneaPaso7.terrenoEsp],
          silla: [this.data.bneaPaso7.silla],
          sillaCant: [this.data.bneaPaso7.sillaCant],
          sillaEsp: [this.data.bneaPaso7.sillaEsp],
          otro: [this.data.bneaPaso7.otro],
          otroCant: [this.data.bneaPaso7.otroCant],
          otroEsp: [this.data.bneaPaso7.otroEsp],
        });
      }
      else {
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: resp.message,
          },
          width: "350px",
        });
      }
    },
      (error) => {
        console.log(error);
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Error",
            body: error,
          },
          width: "350px",
        });
      });
  }
  getDataStep6() {
    this.beneficit = [];
    if (this.data.bneaPaso6s === null) {
      this.createStep6 = true;
      console.log('crear paso 6');
      this.beneficit.push(
        {
          idPaso: 0,
          idBneas: this.idBNEA,
          idRecurso: 0,
          cantidad: 0,
          duracion: 0,
          sueldo: 0,
        });
    }
    else {
      this.createStep6 = false;
      console.log('actualizar paso 6');
      this.sixFormGroup = this._formBuilder.group({
        complete: ['completado'],
      });
      this.service.serviceGeneralGet(`Bnea/GetPaso6?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          const step6Data = resp.result;
          console.log('data paso 6', step6Data);
          if (step6Data.length != 0) {
            step6Data.forEach(element => {
              this.beneficit.push({
                idPaso: element.idPaso,
                idBneas: element.idBneas,
                idRecurso: element.idRecurso,
                cantidad: element.cantidad,
                duracion: element.duracion,
                sueldo: element.sueldo,
              });
            });
          }
        }
      });
    }
  }

  getDataStep7() {
    if (this.data.bneaPaso7 === null) {
      this.createStep7 = true;
      console.log('crear paso 7');
      this.sevenFormGroup = this._formBuilder.group({
        desarrollo: [false],
        desarolloCant: [0],
        desarolloEsp: [''],
        servidor: [false],
        servidorCant: [0],
        servidorEsp: [''],
        licenciaTer: [false],
        licenciaTerCant: [0],
        licenciaTerEsp: [''],
        mobiliario: [false],
        mobiliarioCant: [0],
        mobiliarioEsp: [''],
        equipo: [false],
        equipoCant: [0],
        equipoEsp: [''],
        edificio: [false],
        edificioCant: [0],
        edificioEsp: [''],
        licencia: [false],
        licenciaCant: [0],
        licenciaEsp: [''],
        terreno: [false],
        terrenoCant: [0],
        terrenoEsp: [''],
        silla: [false],
        sillaCant: [0],
        sillaEsp: [''],
        otro: [false],
        otroCant: [0],
        otroEsp: [''],
      });
    }
    else {
      this.createStep7 = false;
      console.log('actualizar paso 7');
      this.service.serviceGeneralGet(`Bnea/GetPaso7?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step7Data = resp.result;
          this.sevenFormGroup = this._formBuilder.group({
            desarrollo: [this.step7Data.desarrollo],
            desarolloCant: [this.step7Data.desarolloCant],
            desarolloEsp: [this.step7Data.desarolloEsp],
            servidor: [this.step7Data.servidor],
            servidorCant: [this.step7Data.servidorCant],
            servidorEsp: [this.step7Data.servidorEsp],
            licenciaTer: [this.step7Data.licenciaTer],
            licenciaTerCant: [this.step7Data.licenciaTerCant],
            licenciaTerEsp: [this.step7Data.licenciaTerEsp],
            mobiliario: [this.step7Data.mobiliario],
            mobiliarioCant: [this.step7Data.mobiliarioCant],
            mobiliarioEsp: [this.step7Data.mobiliarioEsp],
            equipo: [this.step7Data.equipo],
            equipoCant: [this.step7Data.equipoCant],
            equipoEsp: [this.step7Data.equipoEsp],
            edificio: [this.step7Data.edificio],
            edificioCant: [this.step7Data.edificioCant],
            edificioEsp: [this.step7Data.edificioEsp],
            licencia: [this.step7Data.licencia],
            licenciaCant: [this.step7Data.licenciaCant],
            licenciaEsp: [this.step7Data.licenciaEsp],
            terreno: [this.step7Data.terreno],
            terrenoCant: [this.step7Data.terrenoCant],
            terrenoEsp: [this.step7Data.terrenoEsp],
            silla: [this.step7Data.silla],
            sillaCant: [this.step7Data.sillaCant],
            sillaEsp: [this.step7Data.sillaEsp],
            otro: [this.step7Data.otro],
            otroCant: [this.step7Data.otroCant],
            otroEsp: [this.step7Data.otroEsp],
          });
        }
      });
    }
  }
  getDataStep8() {
    if (this.data.bneaPaso8 === null) {
      this.createStep8 = true;
      console.log('crear paso 8');
      this.eightFormGroup = this._formBuilder.group({
        idBnea: [this.idBNEA],
        desarrolloProv: [false],
        desarrolloProvP: [0],
        servidor: [false],
        servidorP: [0],
        licenciaTercero: [false],
        licenciaTerceroP: [0],
        mobiliario: [false],
        mobiliarioP: [0],
        desarrolloSoft: [false],
        desarrolloSoftP: [0],
        horas: [false],
        horasP: [0],
        equipo: [false],
        equipoP: [0],
        edificio: [false],
        edificioP: [0],
        licencia: [false],
        licenciaP: [0],
        terreno: [false],
        terrenoP: [0],
        silla: [false],
        sillaP: [0],
        otro: [false],
        otroP: [0],
      });
    }
    else {
      this.createStep8 = false;
      console.log('actualizar paso 8');
      this.service.serviceGeneralGet(`Bnea/GetPaso8?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step8Data = resp.result;
          this.eightFormGroup = this._formBuilder.group({
            idBnea: [this.step8Data.idBnea],
            desarrolloProv: [this.step8Data.desarrolloProv],
            desarrolloProvP: [this.step8Data.desarrolloProvP],
            servidor: [this.step8Data.servidor],
            servidorP: [this.step8Data.servidorP],
            licenciaTercero: [this.step8Data.licenciaTercero],
            licenciaTerceroP: [this.step8Data.licenciaTerceroP],
            mobiliario: [this.step8Data.mobiliario],
            mobiliarioP: [this.step8Data.mobiliarioP],
            desarrolloSoft: [this.step8Data.desarrolloSoft],
            desarrolloSoftP: [this.step8Data.desarrolloSoftP],
            horas: [this.step8Data.horas],
            horasP: [this.step8Data.horasP],
            equipo: [this.step8Data.equipo],
            equipoP: [this.step8Data.equipoP],
            edificio: [this.step8Data.edificio],
            edificioP: [this.step8Data.edificioP],
            licencia: [this.step8Data.licencia],
            licenciaP: [this.step8Data.licenciaP],
            terreno: [this.step8Data.terreno],
            terrenoP: [this.step8Data.terrenoP],
            silla: [this.step8Data.silla],
            sillaP: [this.step8Data.sillaP],
            otro: [this.step8Data.otro],
            otroP: [this.step8Data.otroP],
          });
        }
      });
    }
  }
  getDataStep9() {
    if (this.data.bneaPaso9 === null) {
      this.createStep9 = true;
      console.log('crear paso 9');
      this.nineFormGroup = this._formBuilder.group({
        margenComer: [false],
        margenComerCant: [0],
        margenComerEsp: [''],
        magenFin: [false],
        margenFinCant: [0],
        margenFinEsp: [''],
        reduccion: [false],
        reduccionCant: [0],
        reduccionEsp: [''],
        volumen: [false],
        volumenCant: [0],
        volumenEsp: [''],
        ingresos: [false],
        ingresosCant: [0],
        ingresosEsp: [''],
      });
    }
    else {
      this.createStep9 = false;
      console.log('actualizar paso 9');
      this.service.serviceGeneralGet(`Bnea/GetPaso9?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step9Data = resp.result;
          this.nineFormGroup = this._formBuilder.group({
            idBnea: [this.step9Data.idBnea],
            margenComer: [this.step9Data.margenComer],
            margenComerCant: [this.step9Data.margenComerCant],
            margenComerEsp: [this.step9Data.margenComerEsp],
            magenFin: [this.step9Data.magenFin],
            margenFinCant: [this.step9Data.margenFinCant],
            margenFinEsp: [this.step9Data.margenFinEsp],
            reduccion: [this.step9Data.reduccion],
            reduccionCant: [this.step9Data.reduccionCant],
            reduccionEsp: [this.step9Data.reduccionEsp],
            volumen: [this.step9Data.volumen],
            volumenCant: [this.step9Data.volumenCant],
            volumenEsp: [this.step9Data.volumenEsp],
            ingresos: [this.step9Data.ingresos],
            ingresosCant: [this.step9Data.ingresosCant],
            ingresosEsp: [this.step9Data.ingresosEsp],
          });
        }
      });
    }
  }
  getDataStep10() {
    if (this.data.bneaPaso10 === null) {
      this.createStep10 = true;
      console.log('crear paso 10');
      this.tenFormGroup = this._formBuilder.group({
        idBnea: [this.idBNEA],
        mantEquipos: [false],
        mantEquiposCant: [0],
        mantEquiposEsp: [''],
        mantEquiposPor: [0],
        soporte: [false],
        soporteCant: [0],
        soporteEsp: [''],
        soportePor: [0],
        plantas: [false],
        plantasCant: [0],
        plantasEsp: [''],
        plantasPor: [0],
        renta: [false],
        rentaCant: [0],
        rentaEsp: [''],
        rentaPor: [0],
        combustible: [false],
        combustibleCant: [0],
        combusitibleEsp: [''],
        combustiblePor: [0],
        energia: [false],
        energiaCant: [0],
        energiaEsp: [''],
        energiaPor: [0],
        suministro: [false],
        suministroCant: [0],
        suministroEsp: [''],
        suministroPor: [0],
        multa: [false],
        multaCant: [0],
        multaEsp: [''],
        multaPor: [0],
        mantComputo: [false],
        mantComputoCant: [0],
        mantComputoEsp: [''],
        mantComputoPor: [0],
        mantTrans: [false],
        mantTransCant: [0],
        mantTransEsp: [''],
        mantTransPor: [0],
        mantTecno: [false],
        mantTecnoCant: [0],
        mantTecnoEsp: [''],
        mantTecnoPor: [0],
        licencia: [false],
        licenciaCant: [0],
        licenciaEsp: [''],
        licenciaPor: [0],
        soporteSoft: [false],
        soporteSoftCant: [0],
        soporteSoftEsp: [''],
        soporteSoftPor: [0],
        consultoria: [false],
        consultoriaCant: [0],
        consultoriaEsp: [''],
        consultoriaPor: [0],
        incremento: [false],
        incrementoCant: [0],
        incrementoEsp: [''],
        incrementoPor: [0],
        decremento: [false],
        decrementoCant: [0],
        decrementoEsp: [''],
        decrementoPor: [0],
        utilizacion: [false],
        utilizacionCant: [0],
        utilizacionEsp: [''],
        utilizacionPor: [0],
      });
    }
    else {
      this.createStep10 = false;
      console.log('actualizar paso 10');
      this.service.serviceGeneralGet(`Bnea/GetPaso10?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step10Data = resp.result;
          this.tenFormGroup = this._formBuilder.group({
            mantEquipos: [this.step10Data.mantEquipos],
            mantEquiposCant: [this.step10Data.mantEquiposCant],
            mantEquiposEsp: [this.step10Data.mantEquiposEsp],
            mantEquiposPor: [this.step10Data.mantEquiposPor],
            soporte: [this.step10Data.soporte],
            soporteCant: [this.step10Data.soporteCant],
            soporteEsp: [this.step10Data.soporteEsp],
            soportePor: [this.step10Data.soportePor],
            plantas: [this.step10Data.plantas],
            plantasCant: [this.step10Data.plantasCant],
            plantasEsp: [this.step10Data.plantasEsp],
            plantasPor: [this.step10Data.plantasPor],
            renta: [this.step10Data.renta],
            rentaCant: [this.step10Data.rentaCant],
            rentaEsp: [this.step10Data.rentaEsp],
            rentaPor: [this.step10Data.rentaPor],
            combustible: [this.step10Data.combustible],
            combustibleCant: [this.step10Data.combustibleCant],
            combusitibleEsp: [this.step10Data.combusitibleEsp],
            combustiblePor: [this.step10Data.combustiblePor],
            energia: [this.step10Data.energia],
            energiaCant: [this.step10Data.energiaCant],
            energiaEsp: [this.step10Data.energiaEsp],
            energiaPor: [this.step10Data.energiaPor],
            suministro: [this.step10Data.suministro],
            suministroCant: [this.step10Data.suministroCant],
            suministroEsp: [this.step10Data.suministroEsp],
            suministroPor: [this.step10Data.suministroPor],
            multa: [this.step10Data.multa],
            multaCant: [this.step10Data.multaCant],
            multaEsp: [this.step10Data.multaEsp],
            multaPor: [this.step10Data.multaPor],
            mantComputo: [this.step10Data.mantComputo],
            mantComputoCant: [this.step10Data.mantComputoCant],
            mantComputoEsp: [this.step10Data.mantComputoEsp],
            mantComputoPor: [this.step10Data.mantComputoPor],
            mantTrans: [this.step10Data.mantTrans],
            mantTransCant: [this.step10Data.mantTransCant],
            mantTransEsp: [this.step10Data.mantTransEsp],
            mantTransPor: [this.step10Data.mantTransPor],
            mantTecno: [this.step10Data.mantTecno],
            mantTecnoCant: [this.step10Data.mantTecnoCant],
            mantTecnoEsp: [this.step10Data.mantTecnoEsp],
            mantTecnoPor: [this.step10Data.mantTecnoPor],
            licencia: [this.step10Data.licencia],
            licenciaCant: [this.step10Data.licenciaCant],
            licenciaEsp: [this.step10Data.licenciaEsp],
            licenciaPor: [this.step10Data.licenciaPor],
            soporteSoft: [this.step10Data.soporteSoft],
            soporteSoftCant: [this.step10Data.soporteSoftCant],
            soporteSoftEsp: [this.step10Data.soporteSoftEsp],
            soporteSoftPor: [this.step10Data.soporteSoftPor],
            consultoria: [this.step10Data.consultoria],
            consultoriaCant: [this.step10Data.consultoriaCant],
            consultoriaEsp: [this.step10Data.consultoriaEsp],
            consultoriaPor: [this.step10Data.consultoriaPor],
            incremento: [this.step10Data.incremento],
            incrementoCant: [this.step10Data.incrementoCant],
            incrementoEsp: [this.step10Data.incrementoEsp],
            incrementoPor: [this.step10Data.incrementoPor],
            decremento: [this.step10Data.decremento],
            decrementoCant: [this.step10Data.decrementoCant],
            decrementoEsp: [this.step10Data.decrementoEsp],
            decrementoPor: [this.step10Data.decrementoPor],
            utilizacion: [this.step10Data.utilizacion],
            utilizacionCant: [this.step10Data.utilizacionCant],
            utilizacionEsp: [this.step10Data.utilizacionEsp],
            utilizacionPor: [this.step10Data.utilizacionPor],
          });
        }
      });
    }
  }
  getDataStep11() {
    if (this.data.bneaPaso11 === null) {
      this.createStep11 = true;
      console.log('crear paso 11');
      this.elevenFormGroup = this._formBuilder.group({
        idBnea: [this.idBNEA],
        recurso: [0],
        tramiteMensual: [0],
        tiempoPromedio: [0],
        tazaError: [0],
        tiempoCorrecion: [0],
        transacciones: [0],
        reducionTiempo: [0],
      });
    }
    else {
      this.createStep11 = false;
      console.log('actualizar paso 11');
      this.service.serviceGeneralGet(`Bnea/GetPaso11?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step11Data = resp.result;
          this.elevenFormGroup = this._formBuilder.group({
            idBnea: [this.step11Data.idBnea],
            recurso: [this.step11Data.recurso],
            tramiteMensual: [this.step11Data.tramiteMensual],
            tiempoPromedio: [this.step11Data.tiempoPromedio],
            tazaError: [this.step11Data.tazaError],
            tiempoCorrecion: [this.step11Data.tiempoCorrecion],
            transacciones: [this.step11Data.transacciones],
            reducionTiempo: [this.step11Data.reducionTiempo],
          });
        }
      });
    }
  }
  getDataStep12() {
    if (this.data.bneaPaso12 === null) {
      this.createStep12 = true;
      console.log('crear paso 12');
      this.twenFormGroup = this._formBuilder.group({
        idBnea: [this.idBNEA],
        espacioFisico: [false],
        agua: [false],
        cfe: [false],
        internet: [false],
        flipper: [false],
        silla: [false],
        archivero: [false],
        mampara: [false],
        computador: [false],
        servidor: [false],
      });
    }
    else {
      this.createStep12 = false;
      console.log('actualizar paso 12');
      this.service.serviceGeneralGet(`Bnea/GetPaso12?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          this.step12Data = resp.result;
          this.twenFormGroup = this._formBuilder.group({
            idBnea: [this.idBNEA],
            espacioFisico: [this.step12Data.espacioFisico],
            agua: [this.step12Data.agua],
            cfe: [this.step12Data.cfe],
            internet: [this.step12Data.internet],
            flipper: [this.step12Data.flipper],
            silla: [this.step12Data.silla],
            archivero: [this.step12Data.archivero],
            mampara: [this.step12Data.mampara],
            computador: [this.step12Data.computador],
            servidor: [this.step12Data.servidor],
          });
        }
      });
    }
  }
  getDataStep13() {
    this.documento = [];
    if (this.data.bneaPaso13 === null) {
      this.createStep13 = true;
      console.log('crear paso 13');
      this.documento.push(
        {
          idBnea: this.idBNEA,
          id: 0,
          documento: '',
          validador: '',
        });
    }
    else {
      this.createStep13 = false;
      console.log('actualizar paso 13');
      this.service.serviceGeneralGet(`Bnea/GetPaso13?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
        if (resp.success) {
          const createStep13 = resp.result;
          console.log('data paso 13', createStep13);
          if (createStep13.length != 0) {
            createStep13.forEach(element => {
              this.documento.push({
                idBnea: element.idBnea,
                id: element.id,
                documento: element.documento,
                validador: element.validador,
              });
            });
          }
        }
      });
    }
  }
  getDataStep14() {
    this.hito = [];
    this.createStep14 = false;
    console.log('actualizar paso 14');
    this.service.serviceGeneralGet(`Bnea/GetPaso14?idUser=${this.user.id}&idBnea=${this.data.bnea.id}`).subscribe(resp => {
      if (resp.success) {
        const createStep14 = resp.result;
        console.log('data paso 14', createStep14);
        if (createStep14.length != 0) {
          createStep14.forEach(element => {
            console.log(this.datePipe.transform(element.fechaInicio, "yyyy-MM-dd"));
            this.hito.push({
              idBnea: element.idBnea,
              idPaso: element.idPaso,
              hito: element.hito,
              fechaInicio: element.fechaInicio = this.datePipe.transform(element.fechaInicio, "yyyy-MM-dd"),
              fechaFin: element.fechaFin = this.datePipe.transform(element.fechaFin, "yyyy-MM-dd"),

            });
          });
        }
        else {
          this.createStep14 = true;
          console.log('crear paso 14');
          this.hito.push(
            {
              idBnea: this.idBNEA,
              idPaso: 0,
              hito: '',
              fechaInicio: this.today,
              fechaFin: this.today,
            });
        }
      }
    });

  }

  // Catalogos 
  getCatTypeBnea() {
    this.service.serviceGeneralGet(`CatTipoBneas`).subscribe(resp => {
      if (resp.success) {
        this.cTypeBnea = resp.result;
        console.log('type bnea', this.cTypeBnea);

      }
    });
  }
  getCatEmpresa() {
    this.service.serviceGeneralGet(`CatEmpresa`).subscribe(resp => {
      if (resp.success) {
        this.cEmpresa = resp.result;
        console.log('empresa', this.cEmpresa);
      }
    });
  }
  getCatRole() {
    this.service.serviceGeneralGet(`CatRolTrabajo/GetAllLider`).subscribe(resp => {
      if (resp.success) {
        this.cRol = resp.result;
        console.log('role', this.cRol);
      }
    });
    this.service.serviceGeneralGet(`CatRolTrabajo/GetAllReciber`).subscribe(resp => {
      if (resp.success) {
        this.cRolReciber = resp.result;
        console.log('roleReciber', this.cRolReciber);
      }
    });
  }
  getCatRecurso() {
    this.service.serviceGeneralGet(`CatRecurso`).subscribe(resp => {
      if (resp.success) {
        this.cRecurso = resp.result;
        console.log('recurso', this.cRecurso);
      }
    });
  }
  cancelar() {
    this.router.navigateByUrl("Admin/list-bneas-admin");
  }
  addBenefit() {
    this.beneficit.push({
      idPaso: 0,
      idBneas: this.idBNEA,
      idRecurso: 0,
      cantidad: 0,
      duracion: 0,
      sueldo: 0,
    });
    console.log('recuersos', this.beneficit);
  }
  addDocument() {
    this.documento.push({
      idBnea: this.idBNEA,
      id: 0,
      documento: '',
      validador: '',
    });
    console.log('recuersos', this.documento);
  }


  deleteBeneficit(data, index) {
    console.log('index', index);
    console.log('data', data);
    if (data.idPaso != 0) {
      this.service.serviceGeneralDelete(`Bnea/DeleteRecursoPaso6?idBnea=${data.idBneas}&idPaso=${data.idPaso}`).subscribe(resp => {
        if (resp.success) {
          console.log('resp paso 6', resp.result);
          this.getData(this.idBNEA);
          this.beneficit = [];
        }
      });
    }
    else {
      if (this.beneficit.length != 1) {
        this.beneficit.splice(index, 1);
      }
    }
  }

  deleteDocumento(data, index) {
    console.log('index', index);
    console.log('data', data);
    if (data.id != 0) {
      this.service.serviceGeneralDelete(`Bnea/DeleteRecursoPaso13?idBnea=${data.idBnea}&idPaso=${data.id}`).subscribe(resp => {
        if (resp.success) {
          console.log('resp paso 13', resp.result);
          this.getData(this.idBNEA);
          this.documento = [];
        }
      });
    }
    else {
      if (this.documento.length != 1) {
        this.documento.splice(index, 1);
      }
    }
  }
  addHito() {
    this.hito.push({
      idBnea: this.idBNEA,
      idPaso: 0,
      hito: '',
      fechaInicio: this.today,
      fechaFin: this.today,
    });
    console.log('hito', this.hito);
  }

  deleteHito(data, index) {
    console.log('index', index);
    console.log('data', data);
    if (data.idPaso != 0) {
      this.service.serviceGeneralDelete(`Bnea/DeleteRecursoPaso14?idBnea=${data.idBnea}&idPaso=${data.idPaso}`).subscribe(resp => {
        if (resp.success) {
          console.log('resp paso 14', resp.result);
          this.getData(this.idBNEA);
          this.hito = [];
        }
      });
    }
    else {
      if (this.hito.length != 1) {
        this.hito.splice(index, 1);
      }
    }
  }
  addTeam() {
    this.team.push({
      name: "",
      roll: "",
    });
  }
  deleteTeam(index) {
    console.log('index', index);

    this.team.splice(index, 1);
  }
  step1(id) {
    console.log('form', this.firstFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso1/${this.user.id}?idTipoBnea=${this.firstFormGroup.value.idTipoBnea}&idBnea=${id}`, '').subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp', resp);
        if (id == 0) {
          const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
            data: {
              header: "Exito",
              body: 'El BNEA se creo correctamente',
            },
            width: "350px",
          });
          this.router.navigateByUrl("Admin/list-bneas-admin");
        }
      }
    });
  }
  step2() {
    console.log('form', this.secondFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso2/${this.user.id}?idBnea=${this.idBNEA}&nombreLider=${this.secondFormGroup.value.nombreLider}&DeptoLider=${this.secondFormGroup.value.deptoLider}&idRolLider=${this.secondFormGroup.value.idRolTrabajo}&nombreRecibe=${this.secondFormGroup.value.nombreRecibe}&DeptoRecibe=${this.secondFormGroup.value.deptoRecibe}&idRolRecibe=${this.secondFormGroup.value.idRolTrabajoRecibe}`, '').subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step3() {
    console.log('form', this.thirdFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso3/${this.user.id}?idBnea=${this.idBNEA}&nombreProyecto=${this.thirdFormGroup.value.nombreProyecto}&area=${this.thirdFormGroup.value.area}&descripcion=${this.thirdFormGroup.value.descripcion}&idEmpresa=${this.thirdFormGroup.value.idEmpresa}`, '').subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        // console.log('resp paso 3', this.data);
        // this.getData(this.data.id);
        console.log('resp 3', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step4() {
    console.log('form', this.fourFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso4/${this.user.id}?idBnea=${this.idBNEA}&situacion=${this.fourFormGroup.value.situacion}&indicadores=${this.fourFormGroup.value.indicadores}&descripcion=${this.fourFormGroup.value.descripcion}&alcance=${this.fourFormGroup.value.alcance}`, '').subscribe(resp => {
      if (resp.success) {
        console.log('resp 4', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step5() {
    console.log('form', this.fiveFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso5/${this.user.id}?idBnea=${this.idBNEA}&alcance=${this.fiveFormGroup.value.alcance}&beneficios=${this.fiveFormGroup.value.beneficios}`, '').subscribe(resp => {
      if (resp.success) {
        console.log('resp 5', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step6() {
    console.log('form', this.beneficit);
    // this.beneficit.forEach(element => {
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso6/${this.user.id}`, this.beneficit).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 6', resp.result);
        this.beneficit = [];
        this.getData(this.idBNEA);
      }
    });
    // });
  }
  step7() {
    this.step7Data.idBnea = this.idBNEA;
    this.step7Data.desarrollo = this.sevenFormGroup.value.desarrollo;
    this.step7Data.desarolloCant = this.sevenFormGroup.value.desarolloCant;
    this.step7Data.desarolloEsp = this.sevenFormGroup.value.desarolloEsp;
    this.step7Data.servidor = this.sevenFormGroup.value.servidor;
    this.step7Data.servidorCant = this.sevenFormGroup.value.servidorCant;
    this.step7Data.servidorEsp = this.sevenFormGroup.value.servidorEsp;
    this.step7Data.licenciaTer = this.sevenFormGroup.value.licenciaTer;
    this.step7Data.licenciaTerCant = this.sevenFormGroup.value.licenciaTerCant;
    this.step7Data.licenciaTerEsp = this.sevenFormGroup.value.licenciaTerEsp;
    this.step7Data.mobiliario = this.sevenFormGroup.value.mobiliario;
    this.step7Data.mobiliarioCant = this.sevenFormGroup.value.mobiliarioCant;
    this.step7Data.mobiliarioEsp = this.sevenFormGroup.value.mobiliarioEsp;
    this.step7Data.equipo = this.sevenFormGroup.value.equipo;
    this.step7Data.equipoCant = this.sevenFormGroup.value.equipoCant;
    this.step7Data.equipoEsp = this.sevenFormGroup.value.equipoEsp;
    this.step7Data.edificio = this.sevenFormGroup.value.edificio;
    this.step7Data.edificioCant = this.sevenFormGroup.value.edificioCant;
    this.step7Data.edificioEsp = this.sevenFormGroup.value.edificioEsp;
    this.step7Data.licencia = this.sevenFormGroup.value.licencia;
    this.step7Data.licenciaCant = this.sevenFormGroup.value.licenciaCant;
    this.step7Data.licenciaEsp = this.sevenFormGroup.value.licenciaEsp;
    this.step7Data.terreno = this.sevenFormGroup.value.terreno;
    this.step7Data.terrenoCant = this.sevenFormGroup.value.terrenoCant;
    this.step7Data.terrenoEsp = this.sevenFormGroup.value.terrenoEsp;
    this.step7Data.silla = this.sevenFormGroup.value.silla;
    this.step7Data.sillaCant = this.sevenFormGroup.value.sillaCant;
    this.step7Data.sillaEsp = this.sevenFormGroup.value.sillaEsp;
    this.step7Data.otro = this.sevenFormGroup.value.otro;
    this.step7Data.otroCant = this.sevenFormGroup.value.otroCant;
    this.step7Data.otroEsp = this.sevenFormGroup.value.otroEsp;
    console.log('form', this.sevenFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso7/${this.user.id}`, this.step7Data).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 7', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step8() {
    this.step8Data.idBnea = this.idBNEA;
    this.step8Data.desarrolloProv = this.eightFormGroup.value.desarrolloProv;
    this.step8Data.desarrolloProvP = this.eightFormGroup.value.desarrolloProvP;
    this.step8Data.servidor = this.eightFormGroup.value.servidor;
    this.step8Data.servidorP = this.eightFormGroup.value.servidorP;
    this.step8Data.licenciaTercero = this.eightFormGroup.value.licenciaTercero;
    this.step8Data.licenciaTerceroP = this.eightFormGroup.value.licenciaTerceroP;
    this.step8Data.mobiliario = this.eightFormGroup.value.mobiliario;
    this.step8Data.mobiliarioP = this.eightFormGroup.value.mobiliarioP;
    this.step8Data.desarrolloSoft = this.eightFormGroup.value.desarrolloSoft;
    this.step8Data.desarrolloSoftP = this.eightFormGroup.value.desarrolloSoftP;
    this.step8Data.horas = this.eightFormGroup.value.horas;
    this.step8Data.horasP = this.eightFormGroup.value.horasP;
    this.step8Data.equipo = this.eightFormGroup.value.equipo;
    this.step8Data.equipoP = this.eightFormGroup.value.equipoP;
    this.step8Data.edificio = this.eightFormGroup.value.edificio;
    this.step8Data.edificioP = this.eightFormGroup.value.edificioP;
    this.step8Data.licencia = this.eightFormGroup.value.licencia;
    this.step8Data.licenciaP = this.eightFormGroup.value.licenciaP;
    this.step8Data.terreno = this.eightFormGroup.value.terreno;
    this.step8Data.terrenoP = this.eightFormGroup.value.terrenoP;
    this.step8Data.silla = this.eightFormGroup.value.silla;
    this.step8Data.sillaP = this.eightFormGroup.value.sillaP;
    this.step8Data.otro = this.eightFormGroup.value.otro;
    this.step8Data.otroP = this.eightFormGroup.value.otroP;
    console.log('form', this.eightFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso8/${this.user.id}`, this.step8Data).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 8', this.data);
        this.getData(this.idBNEA);
      }
    });
  }
  step9() {
    this.step9Data.idBnea = this.idBNEA;
    this.step9Data.margenComer = this.nineFormGroup.value.margenComer;
    this.step9Data.margenComerCant = this.nineFormGroup.value.margenComerCant;
    this.step9Data.margenComerEsp = this.nineFormGroup.value.margenComerEsp;
    this.step9Data.magenFin = this.nineFormGroup.value.magenFin;
    this.step9Data.margenFinCant = this.nineFormGroup.value.margenFinCant;
    this.step9Data.margenFinEsp = this.nineFormGroup.value.margenFinEsp;
    this.step9Data.reduccion = this.nineFormGroup.value.reduccion;
    this.step9Data.reduccionCant = this.nineFormGroup.value.reduccionCant;
    this.step9Data.reduccionEsp = this.nineFormGroup.value.reduccionEsp;
    this.step9Data.volumen = this.nineFormGroup.value.volumen;
    this.step9Data.volumenCant = this.nineFormGroup.value.volumenCant;
    this.step9Data.volumenEsp = this.nineFormGroup.value.volumenEsp;
    this.step9Data.ingresos = this.nineFormGroup.value.ingresos;
    this.step9Data.ingresosCant = this.nineFormGroup.value.ingresosCant;
    this.step9Data.ingresosEsp = this.nineFormGroup.value.ingresosEsp;
    console.log('form', this.nineFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso9/${this.user.id}`, this.step9Data).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 9', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step10() {
    this.step10Data.idBnea = this.idBNEA;
    this.step10Data.mantEquipos = this.tenFormGroup.value.mantEquipos;
    this.step10Data.mantEquiposCant = this.tenFormGroup.value.mantEquiposCant;
    this.step10Data.mantEquiposEsp = this.tenFormGroup.value.mantEquiposEsp;
    this.step10Data.mantEquiposPor = this.tenFormGroup.value.mantEquiposPor;
    this.step10Data.soporte = this.tenFormGroup.value.soporte;
    this.step10Data.soporteCant = this.tenFormGroup.value.soporteCant;
    this.step10Data.soporteEsp = this.tenFormGroup.value.soporteEsp;
    this.step10Data.soportePor = this.tenFormGroup.value.soportePor;
    this.step10Data.plantas = this.tenFormGroup.value.plantas;
    this.step10Data.plantasCant = this.tenFormGroup.value.plantasCant;
    this.step10Data.plantasEsp = this.tenFormGroup.value.plantasEsp;
    this.step10Data.plantasPor = this.tenFormGroup.value.plantasPor;
    this.step10Data.renta = this.tenFormGroup.value.renta;
    this.step10Data.rentaCant = this.tenFormGroup.value.rentaCant;
    this.step10Data.rentaEsp = this.tenFormGroup.value.rentaEsp;
    this.step10Data.rentaPor = this.tenFormGroup.value.rentaPor;
    this.step10Data.combustible = this.tenFormGroup.value.combustible;
    this.step10Data.combustibleCant = this.tenFormGroup.value.combustibleCant;
    this.step10Data.combusitibleEsp = this.tenFormGroup.value.combusitibleEsp;
    this.step10Data.combustiblePor = this.tenFormGroup.value.combustiblePor;
    this.step10Data.energia = this.tenFormGroup.value.energia;
    this.step10Data.energiaCant = this.tenFormGroup.value.energiaCant;
    this.step10Data.energiaEsp = this.tenFormGroup.value.energiaEsp;
    this.step10Data.energiaPor = this.tenFormGroup.value.energiaPor;
    this.step10Data.suministro = this.tenFormGroup.value.suministro;
    this.step10Data.suministroCant = this.tenFormGroup.value.suministroCant;
    this.step10Data.suministroEsp = this.tenFormGroup.value.suministroEsp;
    this.step10Data.suministroPor = this.tenFormGroup.value.suministroPor;
    this.step10Data.multa = this.tenFormGroup.value.multa;
    this.step10Data.multaCant = this.tenFormGroup.value.multaCant;
    this.step10Data.multaEsp = this.tenFormGroup.value.multaEsp;
    this.step10Data.multaPor = this.tenFormGroup.value.multaPor;
    this.step10Data.mantComputo = this.tenFormGroup.value.mantComputo;
    this.step10Data.mantComputoCant = this.tenFormGroup.value.mantComputoCant;
    this.step10Data.mantComputoEsp = this.tenFormGroup.value.mantComputoEsp;
    this.step10Data.mantComputoPor = this.tenFormGroup.value.mantComputoPor;
    this.step10Data.mantTrans = this.tenFormGroup.value.mantTrans;
    this.step10Data.mantTransCant = this.tenFormGroup.value.mantTransCant;
    this.step10Data.mantTransEsp = this.tenFormGroup.value.mantTransEsp;
    this.step10Data.mantTransPor = this.tenFormGroup.value.mantTransPor;
    this.step10Data.mantTecno = this.tenFormGroup.value.mantTecno;
    this.step10Data.mantTecnoCant = this.tenFormGroup.value.mantTecnoCant;
    this.step10Data.mantTecnoEsp = this.tenFormGroup.value.mantTecnoEsp;
    this.step10Data.mantTecnoPor = this.tenFormGroup.value.mantTecnoPor;
    this.step10Data.licencia = this.tenFormGroup.value.licencia;
    this.step10Data.licenciaCant = this.tenFormGroup.value.licenciaCant;
    this.step10Data.licenciaEsp = this.tenFormGroup.value.licenciaEsp;
    this.step10Data.licenciaPor = this.tenFormGroup.value.licenciaPor;
    this.step10Data.soporteSoft = this.tenFormGroup.value.soporteSoft;
    this.step10Data.soporteSoftCant = this.tenFormGroup.value.soporteSoftCant;
    this.step10Data.soporteSoftEsp = this.tenFormGroup.value.soporteSoftEsp;
    this.step10Data.soporteSoftPor = this.tenFormGroup.value.soporteSoftPor;
    this.step10Data.consultoria = this.tenFormGroup.value.consultoria;
    this.step10Data.consultoriaCant = this.tenFormGroup.value.consultoriaCant;
    this.step10Data.consultoriaEsp = this.tenFormGroup.value.consultoriaEsp;
    this.step10Data.consultoriaPor = this.tenFormGroup.value.consultoriaPor;
    this.step10Data.incremento = this.tenFormGroup.value.incremento;
    this.step10Data.incrementoCant = this.tenFormGroup.value.incrementoCant;
    this.step10Data.incrementoEsp = this.tenFormGroup.value.incrementoEsp;
    this.step10Data.incrementoPor = this.tenFormGroup.value.incrementoPor;
    this.step10Data.decremento = this.tenFormGroup.value.decremento;
    this.step10Data.decrementoCant = this.tenFormGroup.value.decrementoCant;
    this.step10Data.decrementoEsp = this.tenFormGroup.value.decrementoEsp;
    this.step10Data.decrementoPor = this.tenFormGroup.value.decrementoPor;
    this.step10Data.utilizacion = this.tenFormGroup.value.utilizacion;
    this.step10Data.utilizacionCant = this.tenFormGroup.value.utilizacionCant;
    this.step10Data.utilizacionEsp = this.tenFormGroup.value.utilizacionEsp;
    this.step10Data.utilizacionPor = this.tenFormGroup.value.utilizacionPor;

    console.log('form', this.tenFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso10/${this.user.id}`, this.step10Data).subscribe(resp => {
      if (resp.success) {
        console.log('resp paso 10', resp.result);
        this.getData(this.idBNEA);
      }
    });
  }
  step11() {
    this.step11Data.idBnea = this.idBNEA;
    this.step11Data.recurso = this.elevenFormGroup.value.recurso;
    this.step11Data.tramiteMensual = this.elevenFormGroup.value.tramiteMensual;
    this.step11Data.tiempoPromedio = this.elevenFormGroup.value.tiempoPromedio;
    this.step11Data.tazaError = this.elevenFormGroup.value.tazaError;
    this.step11Data.tiempoCorrecion = this.elevenFormGroup.value.tiempoCorrecion;
    this.step11Data.transacciones = this.elevenFormGroup.value.transacciones;
    this.step11Data.reducionTiempo = this.elevenFormGroup.value.reducionTiempo;
    console.log('form', this.elevenFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso11/${this.user.id}`, this.step11Data).subscribe(resp => {
      if (resp.success) {
        console.log('resp paso 11', this.data);
        this.getData(this.idBNEA);
      }
    });
  }
  step12() {
    this.step12Data.idBnea = this.idBNEA;
    this.step12Data.espacioFisico = this.twenFormGroup.value.espacioFisico;
    this.step12Data.agua = this.twenFormGroup.value.agua;
    this.step12Data.cfe = this.twenFormGroup.value.cfe;
    this.step12Data.internet = this.twenFormGroup.value.internet;
    this.step12Data.flipper = this.twenFormGroup.value.flipper;
    this.step12Data.silla = this.twenFormGroup.value.silla;
    this.step12Data.archivero = this.twenFormGroup.value.archivero;
    this.step12Data.mampara = this.twenFormGroup.value.mampara;
    this.step12Data.computador = this.twenFormGroup.value.computador;
    this.step12Data.servidor = this.twenFormGroup.value.servidor;
    console.log('form', this.step12Data);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso12/${this.user.id}`, this.step12Data).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 12', this.data);
        this.getData(this.idBNEA);
      }
    });
  }
  step13() {
    console.log('form', this.documento);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso13/${this.user.id}`, this.documento).subscribe(resp => {
      if (resp.success) {
        console.log('resp paso 13', this.data);
        this.documento = [];
        this.getData(this.idBNEA);
      }
    });
  }
  step14() {

    console.log('form', this.hito);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso14/${this.user.id}`, this.hito).subscribe(resp => {
      if (resp.success) {
        console.log('resp paso 14', this.data);
        this.hito = [];
        this.getData(this.idBNEA);

        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Terminaste el BNEA",
            body: 'El BNEA se guardo correctamente',
          },
          width: "350px",
        });
        this.router.navigateByUrl("Admin/list-bneas-admin");
      }
    });
  }
  step103() {
    this.step13Data.idBnea = this.idBNEA;
    this.step13Data.acta = this.thirteenFormGroup.value.acta;
    this.step13Data.planTrabajo = this.thirteenFormGroup.value.planTrabajo;
    this.step13Data.reporte = this.thirteenFormGroup.value.reporte;
    this.step13Data.carta = this.thirteenFormGroup.value.carta;
    this.step13Data.manual = this.thirteenFormGroup.value.manual;
    console.log('form', this.thirteenFormGroup.value);
    this.service.serviceGeneralPostWithUrl(`Bnea/Paso13/${this.user.id}`, this.step13Data).subscribe(resp => {
      if (resp.success) {
        // this.data = resp.result;
        console.log('resp paso 13', this.data);
        this.getData(this.idBNEA);
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Terminaste el BNEA",
            body: 'El BNEA se guardo correctamente',
          },
          width: "350px",
        });
        this.router.navigateByUrl("Admin/list-bneas-admin");
      }
    });
  }
  save() {
    this.router.navigateByUrl("Bnea-ready/2");
  }
}


class Step7Model {
  idBnea: 0;
  desarrollo: boolean;
  desarolloCant: 0;
  desarolloEsp: string;
  servidor: boolean;
  servidorCant: 0;
  servidorEsp: string;
  licenciaTer: boolean;
  licenciaTerCant: 0;
  licenciaTerEsp: string;
  mobiliario: boolean;
  mobiliarioCant: 0;
  mobiliarioEsp: string;
  equipo: boolean;
  equipoCant: 0;
  equipoEsp: string;
  edificio: boolean;
  edificioCant: 0;
  edificioEsp: string;
  licencia: boolean;
  licenciaCant: 0;
  licenciaEsp: string;
  terreno: boolean;
  terrenoCant: 0;
  terrenoEsp: string;
  silla: boolean;
  sillaCant: 0;
  sillaEsp: string;
  otro: boolean;
  otroCant: 0;
  otroEsp: string;
}
class Step8Model {
  idBnea: number;
  desarrolloProv: boolean;
  desarrolloProvP: number;
  servidor: boolean;
  servidorP: number;
  licenciaTercero: boolean;
  licenciaTerceroP: number;
  mobiliario: boolean;
  mobiliarioP: number;
  desarrolloSoft: boolean;
  desarrolloSoftP: number;
  horas: boolean;
  horasP: number;
  equipo: boolean;
  equipoP: number;
  edificio: boolean;
  edificioP: number;
  licencia: boolean;
  licenciaP: number;
  terreno: boolean;
  terrenoP: number;
  silla: boolean;
  sillaP: number;
  otro: boolean;
  otroP: number;
}
class Step9Model {
  idBnea: 0;
  margenComer: boolean;
  margenComerCant: 0;
  margenComerEsp: string;
  magenFin: boolean;
  margenFinCant: 0;
  margenFinEsp: string;
  reduccion: boolean;
  reduccionCant: 0;
  reduccionEsp: string;
  volumen: boolean;
  volumenCant: 0;
  volumenEsp: string;
  ingresos: boolean;
  ingresosCant: 0;
  ingresosEsp: string;
}
class Step10Model {
  idBnea: number;
  mantEquipos: boolean;
  mantEquiposCant: number;
  mantEquiposEsp: string;
  mantEquiposPor: number;
  soporte: boolean;
  soporteCant: number;
  soporteEsp: string;
  soportePor: number;
  plantas: boolean;
  plantasCant: number;
  plantasEsp: string;
  plantasPor: number;
  renta: boolean;
  rentaCant: number;
  rentaEsp: string;
  rentaPor: number;
  combustible: boolean;
  combustibleCant: number;
  combusitibleEsp: string;
  combustiblePor: number;
  energia: boolean;
  energiaCant: number;
  energiaEsp: string;
  energiaPor: number;
  suministro: boolean;
  suministroCant: number;
  suministroEsp: string;
  suministroPor: number;
  multa: boolean;
  multaCant: number;
  multaEsp: string;
  multaPor: number;
  mantComputo: boolean;
  mantComputoCant: number;
  mantComputoEsp: string;
  mantComputoPor: number;
  mantTrans: boolean;
  mantTransCant: number;
  mantTransEsp: string;
  mantTransPor: number;
  mantTecno: boolean;
  mantTecnoCant: number;
  mantTecnoEsp: string;
  mantTecnoPor: number;
  licencia: boolean;
  licenciaCant: number;
  licenciaEsp: string;
  licenciaPor: number;
  soporteSoft: boolean;
  soporteSoftCant: number;
  soporteSoftEsp: string;
  soporteSoftPor: number;
  consultoria: boolean;
  consultoriaCant: number;
  consultoriaEsp: string;
  consultoriaPor: number;
  incremento: boolean;
  incrementoCant: number;
  incrementoEsp: string;
  incrementoPor: number;
  decremento: boolean;
  decrementoCant: number;
  decrementoEsp: string;
  decrementoPor: number;
  utilizacion: boolean;
  utilizacionCant: number;
  utilizacionEsp: string;
  utilizacionPor: number;
}
class Step11Model {
  idBnea: number;
  recurso: number;
  tramiteMensual: number;
  tiempoPromedio: number;
  tazaError: number;
  tiempoCorrecion: number;
  transacciones: number;
  reducionTiempo: number;
}
class Step12Model {
  idBnea: number;
  espacioFisico: boolean;
  agua: boolean;
  cfe: boolean;
  internet: boolean;
  flipper: boolean;
  silla: boolean;
  archivero: boolean;
  mampara: boolean;
  computador: boolean;
  servidor: boolean;
}
class Step13Model {
  idBnea: number;
  acta: boolean;
  planTrabajo: boolean;
  reporte: boolean;
  carta: boolean;
  manual: boolean;
}
