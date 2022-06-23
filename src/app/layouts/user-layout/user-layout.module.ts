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
  ],
  declarations: [
    UserComponent,
    CreateBneaComponent,
    ListBNEASComponent,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class UserLayoutModule { }
