import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open-s1', style({
        width: '20px',
        transformOrigin: '0% 50%',
        translate: '10px 14px',
        rotate: '-40deg',
      })),
      state('open-s2', style({
        width: '40px',
        rotate: '40deg',
      })),
      state('open-s3', style({
        width: '20px',
        translate: '-10px -14px',
        transformOrigin: '100% 50%',
        rotate: '-40deg',
      })),
      state('closed-s1', style({
        width: '40px',
        translate: '0 -2px',
        rotate: '0',
      })),
      state('closed-s2', style({
        width: '40px',
        translate: '0',
        rotate: '0',
      })),
      state('closed-s3', style({
        width: '40px',
        translate: '0 2px',
        rotate: '0',
      })),
      transition('closed-s1 => open-s1', [
        animate('40ms ease-out', style({
          width: '20px',
          transformOrigin: '0% 50%',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '10px -2px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '20px 6px',
          rotate: '-40deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '10px 14px',
        })),
      ]),
      transition('closed-s2 => open-s2', [
        animate('40ms ease-out', style({
          width: '40px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          rotate: '40deg',
        })),
        animate('50ms 10ms ease-out', style({
          rotate: '40deg',
        })),
      ]),
      transition('closed-s3 => open-s3', [
        animate('40ms ease-out', style({
          width: '20px',
          rotate: '0deg',
          transformOrigin: '100% 50%',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '-10px 2px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '-20px -6px',
          rotate: '-40deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '-10px -14px',
        }))
      ]),
      transition('open-s1 => closed-s1', [
        animate('50ms 10ms ease-out', style({
          translate: '20px 6px',
          rotate: '-40deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '10px -2px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '0px -2px',
          width: '20px',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
        })),
      ]),
      transition('open-s2 => closed-s2', [
        animate('50ms 10ms ease-out', style({
          rotate: '40deg',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
        })),
      ]),
      transition('open-s3 => closed-s3', [
        animate('50ms 10ms ease-out', style({
          translate: '-20px -6px',
          rotate: '-40deg',
        })),
        animate('50ms 10ms ease-out', style({
          translate: '-10px 2px',
          rotate: '0deg',
        })),
        animate('50ms 10ms ease-out', style({
          width: '20px',
          translate: '0px 2px',
        })),
        animate('50ms 10ms ease-out', style({
          width: '40px',
        })),
      ]),
    ])
  ]
})

export class HeaderComponent {
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);

  }
}
