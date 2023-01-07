import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { HeaderComponent } from "./header/header.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { KeyboardEventsComponent } from "./keyboard-events/keyboard-events.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header></app-header>
     <!-- <app-property-binding></app-property-binding> -->
     <!-- <app-event-binding></app-event-binding> -->
     <app-keyboard-events></app-keyboard-events>

     `,
    imports: [PropertyBindingComponent, HeaderComponent, EventBindingComponent, KeyboardEventsComponent]
})
export class AppComponent {
  title = 'angular-training';
}
