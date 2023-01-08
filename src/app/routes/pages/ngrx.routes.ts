import { Routes } from "@angular/router";

export const routes: Routes = [

  {
    path: '',
    loadComponent : () => import('../../ngrx/ngrx-welcome-page/ngrx-welcome-page.component')
  },




]
