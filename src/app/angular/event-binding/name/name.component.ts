import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-name',
  template: `
          <p>Whats Your Name</p>
      <div class="m-4 ">
        <input (change)="onInputChange($event)" class="bg-gray-300" #inputValue type="text">
        <button class="w-40 bg-red-400" (click)="onButtonClick(inputValue.value)">Submit</button>
      </div>
  `

})
export class NameComponent {

  @Output() nameSubmitOutput: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(name: string) {
    this.nameSubmitOutput.emit(name);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInputChange(event : any) {
    console.log(event.target.value);
  }
}
