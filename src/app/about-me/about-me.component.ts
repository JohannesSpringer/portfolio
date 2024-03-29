import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('meImg', [
      state('normal', style({
        opacity: '0',
        top: '0',
        left: '0'
      })),
      state('hovered', style({
        opacity: '1',
        top: '20px',
        left: '20px'
      })),
      transition('normal => hovered', [
        animate('100ms ease-in'),
      ])
    ])
  ]
})
export class AboutMeComponent {
  isHovered: boolean = false;

  setHover() {
    this.isHovered = true;
  }
}
