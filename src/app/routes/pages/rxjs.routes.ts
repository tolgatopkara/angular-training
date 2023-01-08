import { Routes } from "@angular/router";

export const routes: Routes = [

  {
    path: '',
    loadComponent : () => import('../../rxjs/rxjs-welcome-page/rxjs-welcome-page.component')
  },



]
