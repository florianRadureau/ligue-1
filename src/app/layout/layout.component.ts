import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public isExpanded: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  removeBodyClass(): void {
    this.renderer.removeClass(this.document.body, 'sidenav-is-opened');
  }

  sidenavExpanded(): void {
    if (window.innerWidth < 768) {
      if (!this.isExpanded) {
        this.isExpanded = true;
        this.renderer.addClass(this.document.body, 'sidenav-is-opened');
      } else if (this.isExpanded) {
        this.isExpanded = false;
        this.removeBodyClass();
      }
    }
  }
}
