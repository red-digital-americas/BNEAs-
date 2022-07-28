import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ForgotPasswordComponent } from "./pages/auth/forgot-password/forgot-password.component";
import { WelcomeComponent } from "./pages/auth/welcome/welcome.component";
import { CreateUserComponent } from "./pages/auth/create-user/create-user.component";
import { MessageCreateBneasComponent } from "./pages/message-create-bneas/message-create-bneas.component";
export const AppRoutes: Routes = [
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },

  {
    path: "login",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "recuperar-contrasena", component: ForgotPasswordComponent },
  { path: "bienvenido/:id", component: WelcomeComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "Bnea-ready/:id", component: MessageCreateBneasComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "Admin",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
        // ./layouts/admin-layout/admin-layout.module#AdminLayoutModule

      },
    ],
  },
  {
    path: "",
    component: UserLayoutComponent,
    children: [
      {
        path: "User",
        loadChildren:
          "./layouts/user-layout/user-layout.module#UserLayoutModule",
      },
    ],
  },
];
// ./layouts/user-layout/user-layout.module#UserLayoutModule
