import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BottomNavigationComponent } from "./bottom-navigation/bottom-navigation.component";
import { BuiltInDirectivesComponent } from "./angular/directives/built-in-directives/built-in-directives.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header></app-header>
     <app-bottom-navigation class="bottom-0 absolute w-full"></app-bottom-navigation>

     `,
    imports: [HeaderComponent, BottomNavigationComponent, BuiltInDirectivesComponent]
})
export class AppComponent {
  title = 'angular-training';
}
