import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";



@Component({
  selector: "app-create-bnea",
  templateUrl: "./create-bnea.component.html",
  styleUrls: ["./create-bnea.component.css"],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: { showError: true },
  //   },
  // ],
})
export class CreateBneaComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  sevenFormGroup: FormGroup;
  eightFormGroup: FormGroup;
  nineFormGroup: FormGroup;
  tenFormGroup: FormGroup;

  public beneficit: any[] = [];
  public team: any[] = [];

  constructor(private _formBuilder: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.beneficit = [
      {
        beneficio1: "",
        cantidad1: 0,
        beneficio2: "",
        cantidad2: 0,
      },
    ];
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.fourFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.sevenFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.eightFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.nineFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.tenFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }
  cancelar() {
    this.router.navigateByUrl("dashboard");
  }
  addBenefit() {
    this.beneficit.push({
      beneficio1: "",
      cantidad1: 0,
      beneficio2: "",
      cantidad2: 0,
    });
  }
  deleteBeneficit(index) {
    this.beneficit.splice(index, 1);
  }
  addTeam() {
    this.team.push({
      name: "",
      roll: "",
    });
  }
  deleteTeam(index) {
    this.team.splice(index, 1);
  }
  save() {
    this.router.navigateByUrl("Bnea-ready");
  }
}
