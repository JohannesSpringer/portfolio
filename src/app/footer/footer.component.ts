import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
    './../header/header.component.scss'],
  animations: [
    trigger('hoverAnimation', [
      state('normal', style({
        opacity: '0',
        height: '2px',
        width: '0',
        transform: 'translateX(-88px)',
        backgroundColor: '#00BC8F',
      })),
      state('highlighted', style({
        opacity: '1',
        height: '2px',
        width: '55px',
        backgroundColor: '#00BC8F',
      })),
      transition('highlighted <=> normal', [
        animate('60ms ease-in'),
      ]),
    ]),
  ],
})
export class FooterComponent {
  appLinks: any[];
  isClicked: boolean = false;
  isHovered: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {
    this.appLinks = sharedService.appLinks;
  }

  openLink(link: string) {
    this.sharedService.openLink(link);
  }

  addClass() {
    this.isClicked = true;
  }

  removeClass() {
    this.isClicked = false;
  }

  scrollToElement(elementId: string, offset: number) {
    this.sharedService.scrollToElement(elementId, offset);
  }

  setHover() {
    this.isHovered = true;
  }

  resetHover() {
    this.isHovered = false;
  }

  navigateToLegalNotice() {
    this.router.navigate(['/legal-notice']);
    window.scrollTo(0, 0);
  }
}
