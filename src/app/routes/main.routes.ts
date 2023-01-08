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
    loadChildren : () => import('./pages/angular.routes').then(m => m.routes)
  },
  {
    path : 'rxjs',
    loadChildren : () => import('./pages/rxjs.routes').then(m => m.routes)
  },
  {
    path : 'typescript',
    loadChildren : () => import('./pages/typescript.routes').then(m => m.routes)

  },
  {
    path : 'ngrx',
    loadChildren : () => import('./pages/ngrx.routes').then(m => m.routes)
  }


]
