import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserAdminComponent } from 'app/pages/user-admin/user-admin.component'; 
import { CreateBneaAdminComponent } from 'app/pages/create-bnea-admin/create-bnea-admin.component'; 
import { ListBneasAdminComponent } from 'app/pages/list-bneas-admin/list-bneas-admin.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from 'app/pages/user-list/user-list.component';
import { CreateUserAdminComponent } from 'app/pages/create-user-admin/create-user-admin.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { OrderByPipe } from './pipe/orderby.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxChartsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    DashboardComponent,
    UserAdminComponent,
    CreateBneaAdminComponent,
    ListBneasAdminComponent,
    UserListComponent,
    CreateUserAdminComponent,
    OrderByPipe,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AdminLayoutModule { }
