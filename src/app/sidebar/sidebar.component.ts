import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'BNEAs', icon: 'bi-clipboard-check', class: '' },
  { path: '/user', title: 'Usuarios', icon: 'bi-people-fill', class: '' },
  // { path: '/maps',          title: 'Barra',              icon:'nc-pin-3',      class: '' },
  // { path: '/notifications', title: 'Sistema y Caja',     icon:'nc-bell-55',    class: '' },
  // { path: '/user',          title: 'Capacitación',      icon:'nc-single-02',  class: '' },
  // { path: '/table',         title: 'Apertura',        icon:'nc-tile-56',    class: '' },
  // { path: '/typography',    title: 'Cierre',        icon:'nc-caps-small', class: '' },
  // { path: '/upgrade',       title: 'Inventario',    icon:'nc-spaceship',  class: 'active-pro' },
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
