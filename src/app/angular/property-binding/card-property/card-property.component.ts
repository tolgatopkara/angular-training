import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card-property',
  template : `
    <div class="bg-gray-200  p-4 m-4">
          <h1> {{title}}</h1>
          <div>
                <p>{{body}}</p>
          </div>
    </div>
  `
})
export class CardPropertyComponent {

      @Input() title!: string;
      @Input() body!: string;

}
