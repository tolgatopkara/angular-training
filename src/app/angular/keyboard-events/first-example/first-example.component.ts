import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  standalone: true,
    imports: [NgIf],

  selector: 'app-first-example',
  template: `
  <p *ngIf="!isInput1Filled">Whats Your Name </p>
  <p *ngIf="isInput1Filled">Welcome!! {{name}}!!</p>
  <input #input1 id="input1" class="bg-red-400 m-4 text-black" placeholder="Placeholder" type="text" (keydown.enter)="onKeyPress($event.target, input2)">
  <p *ngIf="!isInput2Filled"> Whats Your Surname </p>
  <p *ngIf="isInput2Filled">your surname {{surname}}</p>

  <input #input2 id="input2" class="bg-red-400 m-4 text-black" placeholder="Placeholder" type="text" (keydown.enter)="onKeyPress($event.target ,input1)">


  `
})
export class FirstExampleComponent {
  isInput1Filled = false;
  isInput2Filled = false;
  name = '';
  surname = '';

  @ViewChild('input1', { static: true }) input1!: HTMLElement;
  @ViewChild('input2', { static: true }) input2!: HTMLElement;



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyPress(event: any, nextInput: HTMLElement) {
    console.log(event.value);

    if (event.id === 'input1') {
      this.name = event.value;
      if (this.name === '') {
        this.isInput1Filled = false;
      }
      else
      {
        this.isInput1Filled = true;
      }
    }
    else {
      this.surname = event.value;
      if (this.surname === '') {
        this.isInput2Filled = false;
      }
      else
      {
        this.isInput2Filled = true;
      }
    }

    nextInput.focus();
  }


}
