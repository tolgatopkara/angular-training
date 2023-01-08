import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls : ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {

  isMainIconRotated = false;
  @ViewChild('menuMainIcon') menuMainIcon: ElementRef<HTMLElement>;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.menuMainIcon = this.elementRef;
  }

  toggleMenuIcon() {
    this.isMainIconRotated = !this.isMainIconRotated;

    switch (this.isMainIconRotated) {
      case true:
        this.renderer.addClass(this.menuMainIcon.nativeElement, 'active');
        break;
      case false:
        this.renderer.removeClass(this.menuMainIcon.nativeElement, 'active');
        break;
    }

  }
}
