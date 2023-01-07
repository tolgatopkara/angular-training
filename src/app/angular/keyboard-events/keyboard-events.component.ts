import { Component } from '@angular/core';
import { FirstExampleComponent } from "./first-example/first-example.component";
import { SecondExampleComponent } from "./second-example/second-example.component";

@Component({
    standalone: true,
    selector: 'app-keyboard-events',
    template: `
  <app-first-example></app-first-example>
  <app-second-example></app-second-example>


  `,
    imports: [FirstExampleComponent, SecondExampleComponent]
})
export class KeyboardEventsComponent {






}
