import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/Admin/dashboard', title: 'Dashboard', icon: 'bi-bar-chart', class: '' },
  { path: '/Admin/list-bneas-admin', title: 'BNEAS', icon: 'bi-clipboard-check', class: '' },
  { path: '/Admin/list-user', title: 'Usuarios', icon: 'bi-people-fill', class: '' },
  { path: '/Admin/user-admin', title: 'Perfil', icon: 'bi-person', class: 'active-pro' },
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
