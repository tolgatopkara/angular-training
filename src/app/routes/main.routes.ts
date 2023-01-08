import { Routes } from "@angular/router";

export const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'notes'
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent : () => import('../home/home.component')
  },
  {
    path : 'angular',
    loadComponent : () => import('../angular/angular-welcome/angular-welcome.component')
  },
  {
    path : 'rxjs',
    loadComponent : () => import('../rxjs/rxjs-welcome-page/rxjs-welcome-page.component')
  },
  {
    path : 'typescript',
    loadComponent : () => import('../typescript/typescript-welcome-page/typescript-welcome-page.component')
  },
  {
    path : 'ngrx',
    loadComponent : () => import('../ngrx/ngrx-welcome-page/ngrx-welcome-page.component')
  }


]
