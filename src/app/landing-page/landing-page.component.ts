import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  headline: HTMLElement | null = null;
  contactLink: HTMLElement | null = null;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.headline = document.getElementById("headline");
    this.contactLink = document.getElementById("contactLink");
    this.adjustContentHeight();
    window.addEventListener('resize', this.adjustContentHeight.bind(this));
  }

  adjustContentHeight() {
    if (this.headline && this.contactLink) {
      const headlineHeight = this.headline.offsetHeight;
      const contactLinkHeight = window.innerHeight - headlineHeight;
      this.renderer.setStyle(this.contactLink, 'height', `calc(${contactLinkHeight}px - 218px)`);
    }
  }
}
