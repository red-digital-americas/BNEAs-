import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceGeneralService } from 'app/core/services/service-general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DialogGeneralMessageComponent } from 'app/pages/dialog-general/dialog-general-message/dialog-general-message.component';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateUserComponent implements OnInit {
  public data: DataModel = new DataModel();
  public catBussinessUnit;
  public catArea;
  public catSubDivision;
  public catRol;

  public today = new Date()
  // rol siempre sera 1 por que son permisos generales 
  // rol 2 es admin
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    idBusinessUnit: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    token: ['string'],
    noEmployee: ['', Validators.required],
    roleId: [1, Validators.required],
    idArea: ['', Validators.required],
    idSubDivision: ['', Validators.required],
    employeePosition: ['', Validators.required],
    term: ['true', Validators.required],
    status: [1, Validators.required],
    createdDate: [this.today, Validators.required],
    createdBy: [0, Validators.required],
    updatedBy: [1, Validators.required],
    updatedDate: [this.today, Validators.required],
    registerCodes: [[{
      id: 0,
      idUser: 0,
      code: ''
    }]],
  });
  secondFormGroup = this._formBuilder.group({
    code: ['', Validators.required],
    validCode: [''],

  });
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    public router: Router,
    public service: ServiceGeneralService,
    public _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.catalogsBussiness();
    this.catalogsArea();
    this.catalogsSubDireccion();
    this.catalogsRol();

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      idBusinessUnit: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      token: ['string'],
      noEmployee: ['', Validators.required],
      roleId: [1, Validators.required],
      idArea: [0, Validators.required],
      idSubDivision: [0, Validators.required],
      employeePosition: ['', Validators.required],
      term: ['true', Validators.required],
      status: [1, Validators.required],
      createdDate: [this.today, Validators.required],
      createdBy: [1, Validators.required],
      updateDate: [this.today, Validators.required],
      updatedBy: [1, Validators.required],
      updatedDate: [this.today, Validators.required],
      registerCodes: [[{
        id: 0,
        idUser: 0,
        code: ''
      }]],

    });
    this.secondFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      validCode: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }
  catalogsBussiness() {
    this.service
      .serviceGeneralGet(`CatBusinessUnit`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catBussinessUnit = resp.result;
          console.log('bussiness', this.catBussinessUnit);
        }
      });
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
  catalogsSubDireccion() {
    this.service
      .serviceGeneralGet(`CatSubDivision`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catSubDivision = resp.result;
          console.log('area', this.catSubDivision);
        }
      });
  }
  catalogsRol() {
    this.service
      .serviceGeneralGet(`CatRolTrabajo`)
      .subscribe((resp) => {
        if (resp.success) {
          this.catRol = resp.result;
          console.log('rol', this.catRol);
        }
      });
  }
  step1() {
    console.log('form', this.firstFormGroup.value);
    this.service.serviceGeneralPostWithUrl('User/CreateUser123', this.firstFormGroup.value).subscribe(resp => {
      if (resp.success) {
        this.data = resp.result;
        console.log('resp', this.data);
      }
    });
  }
  getCodeValid() {
    if (this.secondFormGroup.value.code.length >= 4) {
      console.log('form', this.secondFormGroup.value);
      console.log('resp data', this.data);
      this.service.serviceGeneralGet(`User/CodeValidate?idUser=${this.data.id}&code=${this.secondFormGroup.value.code}`).subscribe(resp => {
        if (resp.success) {
          this.data = resp.result;
          console.log('resp', this.data);
          this.secondFormGroup.value.validCode = 'listo';
          console.log('form', this.secondFormGroup.value);
          const dialog2 = this._dialog.open
          (DialogGeneralMessageComponent, {
            data: {
              header: "Exito",
              body: "Tu cuenta esta activada.",
            },
            width: "350px",
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
        }
      );
    }
  }
  resentCode() {
    this.service.serviceGeneralPut(`User/Resend_Code?email=${this.firstFormGroup.value.email}`, '').subscribe(resp => {
      if (resp.success) {
        this.data = resp.result;
        console.log('resp', this.data);
        const dialog2 = this._dialog.open(DialogGeneralMessageComponent, {
          data: {
            header: "Exito",
            body: "En breve recibirás el codigo de verificación a tu correo.",
          },
          width: "350px",
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
  back() {
    this.router.navigateByUrl("login");
  }
  login() {
    this.router.navigateByUrl("login");
  }
}
class DataModel {
  id: number;
  email: string;
  password: string;
  name: string;
  token: string;
  idBusinessUnit: number;
  noEmployee: string;
  roleId: number;
  status: number;
  idArea: number;
  idSubDivision: number;
  employeePosition: string;
  createdBy: number;
  createdDate: Date;
  updatedBy: number;
  updatedDate: Date;
  registerCodes: RegisterCodesModel = new RegisterCodesModel();
}
class RegisterCodesModel {
  id: number;
  idUser: number;
  code: string;
}


