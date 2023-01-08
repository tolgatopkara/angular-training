import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  standalone: true,
  imports: [NgIf, NgForOf, HighlightDirective],
  selector: 'app-built-in-directives',
  template : `
    <button (click)="onButtonClick()">Toggle Boolean Value  {{testBoolean}}</button>
    <p *ngIf="testBoolean">This paragraph will only show if the boolean value is true</p>
    <p *ngFor="let stringCollection of stringCollection" appHighlight>
       {{stringCollection}}
    </p>
   `
})
export class BuiltInDirectivesComponent {
    testBoolean = false;
    stringCollection : string[]  = ['one', 'two', 'three', 'four', 'five', 'lorem ipsum'];


  onButtonClick() {
    // toggle the boolean value
    this.testBoolean = !this.testBoolean;
  }
}
