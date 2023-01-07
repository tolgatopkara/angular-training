import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { EventBindingComponent } from "./angular/event-binding/event-binding.component";
import { KeyboardEventsComponent } from "./angular/keyboard-events/keyboard-events.component";
import { PropertyBindingComponent } from "./angular/property-binding/property-binding.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <!-- <app-property-binding></app-property-binding>
      <app-event-binding></app-event-binding> -->
     <app-keyboard-events></app-keyboard-events>

     `,
    imports: [ HeaderComponent,  EventBindingComponent, KeyboardEventsComponent, PropertyBindingComponent]
})
export class AppComponent {
  title = 'angular-training';
}
