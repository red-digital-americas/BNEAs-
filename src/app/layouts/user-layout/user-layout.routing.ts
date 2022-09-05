import { Routes } from "@angular/router";
import { ListBNEASComponent } from "app/pages/list-bneas/list-bneas.component";
import { CreateBneaComponent } from "app/pages/create-bnea/create-bnea.component";
import { UserComponent } from "../../pages/user/user.component";

export const UserLayoutRoutes: Routes = [
  { path: "list-BNEAs", component: ListBNEASComponent },
  { path: "user", component: UserComponent },
  { path: "create-BNEAs/:id", component: CreateBneaComponent }
];
