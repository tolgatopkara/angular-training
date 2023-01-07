import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'app-second-example',
  template: `
              <p class="text-3xl font-bold">You Dont Have To Click</p>

      <div class="flex">
          <div (click)="toggle()" tabindex="0"  class=" h-44 w-44 m-4 border-violet-500 border-4  text-center ">
              <p>{{isPlaying ? 'Playing' : 'Paused'}}</p>
          </div>

          <div  tabindex="0"  class=" h-44 w-44 m-4 border-violet-500 border-4  text-center ">
              <p>{{keyPressed.slice(0, 5).join(', ')}}</p>
              <p>{{keyPressed[keyPressed.length - 1]}}</p>
               <p *ngIf="keyPressed.length < 5; else tooManyKeys"></p>
              <ng-template #tooManyKeys>Too many keys pressed please dont spam</ng-template>
          </div>


      </div>



  `
})
export class SecondExampleComponent {

  keyPressed: string[] = [];
  isPlaying = false;


  @HostListener('window:keydown.space') spaceEvent() {
    this.toggle();
  }
  @HostListener('window:keypress', ['$event']) spaceEvent2(event: KeyboardEvent) {
    this.keyPressed.push(event.key)
  }



  toggle() {
    this.isPlaying = !this.isPlaying;
  }


}
