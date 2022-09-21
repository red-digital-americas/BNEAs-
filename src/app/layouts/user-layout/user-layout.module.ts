import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UserLayoutRoutes } from './user-layout.routing';

import { CreateBneaComponent } from '../../pages/create-bnea/create-bnea.component';
import { UserComponent } from '../../pages/user/user.component';
import { ListBNEASComponent } from 'app/pages/list-bneas/list-bneas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogChangePasswordComponent } from 'app/pages/dialog/dialog-change-password/dialog-change-password.component';
import { MatDialogModule } from "@angular/material/dialog";
import { OrderByPipe } from './pipe/orderby.pipe'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    Ng2SearchPipeModule,
  ],
  declarations: [
    UserComponent,
    CreateBneaComponent,
    ListBNEASComponent,
    DialogChangePasswordComponent,
    OrderByPipe,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class UserLayoutModule { }
