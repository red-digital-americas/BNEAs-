import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { CreateBneaComponent } from "app/pages/create-bnea/create-bnea.component";
import { CreateUserComponent } from "app/pages/auth/create-user/create-user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "create-BNEAs", component: CreateBneaComponent },
  // { path: "table", component: TableComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "icons", component: IconsComponent },
  // { path: "maps", component: MapsComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "upgrade", component: UpgradeComponent },
];
