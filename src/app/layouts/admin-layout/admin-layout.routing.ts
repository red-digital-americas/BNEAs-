import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserAdminComponent } from "app/pages/user-admin/user-admin.component"; 
import { CreateBneaAdminComponent } from "app/pages/create-bnea-admin/create-bnea-admin.component"; 
import { ListBneasAdminComponent } from "app/pages/list-bneas-admin/list-bneas-admin.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-admin", component: UserAdminComponent },
  { path: "list-bneas-admin", component: ListBneasAdminComponent },
  { path: "create-BNEAs-admin", component: CreateBneaAdminComponent },
];
