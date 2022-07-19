import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { ServiceGeneralService } from "app/core/services/service-general.service"; 
@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.css']
})
export class DialogChangePasswordComponent implements OnInit {

  active_password: boolean = false;
  active_password2: boolean = false;
  password2: any;
  regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  hintMessen: any;
  hintMessen2: any;
  hintId = document.getElementById('hintpass');
  hintId2 = document.getElementById('hintpass2');
  passCorrect: boolean = false;
  public password;
  eyed = false;
  public typeInput = 'password';
  eyed2 = false;
  public typeInput2 = 'password';

  validar: boolean = false;
  btnDisables = false;
  constructor(public dialogRef: MatDialogRef<DialogChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any,
    public services: ServiceGeneralService,
    public _dialog: MatDialog) { }


  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  validarPass() {
    if (this.password == undefined && this.password != '') {
      this.hintMessen = "Campo requerido";
      this.hintMessen2 = "Campo requerido";
      this.active_password = true;
    } if (this.password2 == undefined && this.password2 != '') {
      this.hintMessen = "Campo requerido";
      this.hintMessen2 = "Campo requerido";
      this.active_password2 = true;
    }
    if (this.password != '' && this.password2 != '') {
      //si las contraseñas no coinciden
      if (this.password != this.password2) {
        this.active_password = true;
        this.active_password2 = true;
        this.hintMessen = "No es la misma contraseña";
        this.hintMessen2 = "No es la misma contraseña";
      }
      else if (this.password == this.password2) {
        //Si todo esta correcto
        if (this.regex.test(this.password)) {
          this.active_password = false;
          this.active_password2 = false;
          console.log('correcto las contraseñas coinciden');
          this.passCorrect = true;

        }
        // si no es correcto
        else {
          this.active_password = true;
          this.active_password2 = true;
          this.hintMessen = "Contraseña invalida";
          this.hintMessen2 = "Contraseña invalida";
          // letras mayusculas
          let patronMayus = /[A-Z]/g;
          let letterUpercaseSearch = (this.password.match(patronMayus));
          if (letterUpercaseSearch == null) {
            console.log('no hay letras mayus');
            this.hintMessen = "Agrega una letra mayuscula";
            this.hintMessen2 = "Agrega una letra mayuscula";
          }
          else {
            console.log('si hay mayusculas');
            console.log(this.password.match(patronMayus));
          }
          // buscar numeros
          let patronnumber = /[1-9]/g;
          let numberSearch = (this.password.match(patronnumber));
          if (numberSearch == null) {
            console.log('no hay numeros');
            this.hintMessen = "Agrega un numero";
            this.hintMessen2 = "Agrega un numero";
          }
          else {
            console.log('si hay numeros');
            console.log(this.password.match(patronnumber));
          }
          // mayor a 8 caracteres
          if (this.password.length < 8) {
            this.hintMessen = "Minimo 8 caracteres";
            this.hintMessen2 = "Minimo 8 caracteres";
          }
        }
      }
    }
    else {
      this.active_password = true;
      this.active_password2 = true;
      this.hintMessen = "Contraseña vacia";
      this.hintMessen2 = "Contraseña vacia";
    }
  }
  validarForm() {
    if (this.passCorrect == true) {
      this.save();
    }
    else {
      this.active_password = true;
      this.active_password2 = true;
      this.hintMessen = "Contraseña invalida";
      this.hintMessen2 = "Contraseña invalida";
    }
  }
  public viewPassword(type) {
    if (type === true) {
      this.typeInput = 'text';
      this.eyed = true;
    } else {
      this.typeInput = 'password';
      this.eyed = false;
    }
  }
  public viewPassword2(type) {
    if (type === true) {
      this.typeInput2 = 'text';
      this.eyed2 = true;
    } else {
      this.typeInput2 = 'password';
      this.eyed2 = false;
    }
  }


  save() {
    this.btnDisables = true;
    this.services.serviceGeneralPut(`User/Change_password?email=${this.param.correo}&password=${this.password}`, '').subscribe(r => {
      if (r.success) {
        console.log('respuesta de update', r);
        this.dialogRef.close(2);
      }
      else {
        this.dialogRef.close(3);
      }
    })
  }

}
