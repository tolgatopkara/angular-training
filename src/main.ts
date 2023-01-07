import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component';



bootstrapApplication(AppComponent,
  {
    providers: [
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule,BrowserModule)

]
  }).catch((err) => console.log(err)
  );

