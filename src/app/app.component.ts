import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BottomNavigationComponent } from "./bottom-navigation/bottom-navigation.component";
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-bottom-navigation class="bottom-0 absolute w-full"></app-bottom-navigation>
    `,
    imports: [HeaderComponent, BottomNavigationComponent,   RouterModule]
})
export default class AppComponent {
  title = 'angular-training';
}
