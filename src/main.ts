import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(AppComponent,
  {
    providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule,BrowserModule),

          ]


  }).catch((err) => console.log(err)
  );

