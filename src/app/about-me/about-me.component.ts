import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('meImg', [
      state('normal', style({
        opacity: '0',
      })),
      state('hovered', style({
        opacity: '1',
      })),
      transition('normal <=> hovered', [
        animate('100ms ease-in'),
      ])
    ])
  ]
})
export class AboutMeComponent {
  isHovered: boolean = false;

  constructor(private sharedService: SharedService) {}

  setHover() {
    this.isHovered = true;
  }

  resetHover() {
    this.isHovered = false;
  }

  scrollToElement(elementId: string, offset: number) {
    this.sharedService.scrollToElement(elementId, offset);
  }
}
