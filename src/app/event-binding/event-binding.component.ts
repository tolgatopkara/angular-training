import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NameComponent } from "./name/name.component";

@Component({
  standalone: true,
  selector: 'app-event-binding',
  template: `
          <ng-container *ngIf="loggedIn">
            <p>Hey, Welcome {{ displayName }} !!</p>
        </ng-container>

          <ng-container *ngIf="!loggedIn">
          <app-name (nameSubmitOutput)="onNameSubmit($event)"></app-name>

          </ng-container>
    `,
  imports: [NameComponent, NgIf]
})
export class EventBindingComponent {

  loggedIn = false;
  displayName!: string;

  onNameSubmit(name: string) {

    this.loggedIn = true;
    this.displayName = name;

    console.log(name);
  }

}
