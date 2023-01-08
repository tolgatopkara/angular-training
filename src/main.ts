import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, Route, withPreloading, withRouterConfig } from '@angular/router';
import AppComponent from './app/app.component';

const appRoutes: Route[] = [
  {
    path: '',
    loadChildren : () => import('./app/routes/main.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


bootstrapApplication(AppComponent,
  {
    providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withRouterConfig({ onSameUrlNavigation: 'reload' })),

    importProvidersFrom(BrowserAnimationsModule,BrowserModule),

          ]


  }).catch((err) => console.log(err)
  );

