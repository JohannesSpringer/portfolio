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
        rotate: '0deg',
      })),
      state('closed-s2', style({
        width: '40px',
        translate: '0',
        rotate: '0deg',
      })),
      state('closed-s3', style({
        width: '40px',
        translate: '0 2px',
        rotate: '0deg',
      })),
      state('menu-button-opened', style({
        height: 'calc(100vh - 92px)',
        display: 'flex',
        marginTop: '92px',
      })),
      state('menu-button-closed', style({
        display: 'none',
        marginTop: '100vh',
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
      transition('menu-button-closed <=> menu-button-opened', [
        animate('400ms 10ms ease-out'),
      ]),
    ]),
    trigger('hoverAnimation', [
      state('normal', style({
        width: '18px',
        bottom: 0,
        left: 0,
        borderLeft: '4px solid black',
        borderBottom: '4px solid black',
      })),
      state('highlighted', style({
        width: '42%',
        borderLeft: 'none',
        left: 'unset',
        right: 0,
      })),
      state('clicked', style({
        width: '100%',
        height: '100%',
        border: '4px solid black',
      })),
      transition('highlighted => normal', [
        animate('40ms ease-out', style({
          width: '100%',
        })),
        animate('1ms linear', style({
          left: 0,
        })),
        animate('40ms ease-out', style({
          width: '18px',
          bottom: 0,
          left: 0,
          borderLeft: '4px solid black',
          borderBottom: '4px solid black',
        }))
      ]),
      transition('normal => highlighted', [
        animate('40ms ease-out', style({
          width: '18px',
          bottom: 0,
          left: 0,
          borderLeft: '4px solid black',
          borderBottom: '4px solid black',
        })),
        animate('1ms linear', style({
          right: 0,
        })),
        animate('40ms ease-out', style({
          width: '100%',
        })),
      ]),
      transition('highlighted => clicked', [
        animate('20ms ease-out', style({
          width: '100%',
        })),
        animate('10ms ease-out', style({
          height: '100%',
          borderLeft: '4px solid black',
          borderRight: '4px solid black',
        })),
        animate('10ms ease-out', style({
          borderTop: '4px solid black',
        })),
      ]),
      transition('clicked => normal', [
        animate('5ms ease-in', style({
          width: '100%',
          height: '100%',
          border: 'none',
          borderLeft: 'none',
          borderBottom: '4px solid black',
        })),
        animate('5ms linear', style({
          left: 0,
        })),
        animate('80ms ease-in', style({
          width: '18px',
          height: '20px',
        })),
        animate('10ms ease-in', style({
          borderLeft: '4px solid black',
        }))
      ]),
    ]),
  ]
})

export class HeaderComponent {
  isOpen: boolean = false;
  menuButtons = [
    ['About me', 'id', 'normal'],
    ['My skills', 'id', 'normal'],
    ['Portfolio', 'id', 'normal'],
  ]

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  setHover(id: number) {
    this.menuButtons[id][2] = 'highlighted';
  }

  resetHover(id: number) {
    this.menuButtons[id][2] = 'normal';
  }

  onClick(id: number) {
    this.menuButtons[id][2] = 'clicked';
  }
}
