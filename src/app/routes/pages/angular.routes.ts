import { Routes } from "@angular/router";

export const routes: Routes = [

  {
    path: '',
    loadComponent : () => import('../../angular/angular-welcome/angular-welcome.component')
  },
  {
    path: 'directives',
    loadComponent: () => import('../../angular/directives/directives.component')

  },



]
