import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  standalone: true,
    imports: [NgIf],

  selector: 'app-first-example',
  template: `
  <p *ngIf="!isInput1Empty">Whats Your Name </p>
  <p *ngIf="isInput1Empty">Welcome!! {{name}}!!</p>
  <input #input1 id="input1" class="bg-red-400 m-4 text-black" placeholder="Placeholder" type="text" (keydown.enter)="onKeyPress($event.target, input2)">
  <p *ngIf="!isInput2Empty"> Whats Your Surname </p>
  <p *ngIf="isInput2Empty">your surname {{surname}}</p>

  <input #input2 id="input2" class="bg-red-400 m-4 text-black" placeholder="Placeholder" type="text" (keydown.enter)="onKeyPress($event.target ,input1)">


  `
})
export class FirstExampleComponent {
  isInput1Empty = false;
  isInput2Empty = false;
  name = '';
  surname = '';

  @ViewChild('input1', { static: true }) input1!: HTMLElement;
  @ViewChild('input2', { static: true }) input2!: HTMLElement;



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyPress(event: any, nextInput: HTMLElement) {
    console.log(event.value);

    switch (event.id) {
      case 'input1':
        this.name = event.value;
        this.isInput1Empty = this.name !== '';  // if name is not empty then isInput1Filled is true
        break;
      case 'input2':
        this.surname = event.value;
        this.isInput2Empty = this.surname !== ''; // if surname is not empty then isInput2Filled is true
        break;
    }

    nextInput.focus();
  }


}
