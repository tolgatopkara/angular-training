import { Component } from '@angular/core';
import { CardPropertyComponent } from "./card-property/card-property.component";

@Component({
  standalone: true,
  selector: 'app-property-binding',
  template: `
    <app-card-property [title]="title" [body]="body"></app-card-property>
    <app-card-property title="title example 2" body="body example 2"></app-card-property>
    <app-card-property [title]="'title example 3'" [body]="'body example 3'"></app-card-property>


    <img class="w-12" [src]="imageSource" alt="">
    <br>
    <button class="bg-red-400 disabled:bg-red-50  " [disabled]="isButtonDisabled">click me</button>
    <br>
    <br>
    <input class="bg-sky-300" type="text" [value]="inputValue" >
  `,
  imports: [CardPropertyComponent]
})
export class PropertyBindingComponent {
  imageSource = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isButtonDisabled = false;
  inputValue  = 'hello world';


  title = 'this is a title and the best way to set it';
  body = 'this is a body and the best way to set it';
}
