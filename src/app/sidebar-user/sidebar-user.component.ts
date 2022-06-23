import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/User/list-BNEAs', title: 'BNEAs', icon: 'bi-clipboard-check', class: '' },
  { path: '/User/user', title: 'Perfil', icon: 'bi-person', class: 'active-pro' },
];

@Component({
  moduleId: module.id,
  selector: 'app-sidebar-user',
  templateUrl: 'sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
