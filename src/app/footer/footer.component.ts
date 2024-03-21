import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
    './../header/header.component.scss']
})
export class FooterComponent {
  appLinks = [
    {
      "name": "GitHub",
      "image": "./../../assets/img/git-logo.png",
      "link": "https://github.com/JohannesSpringer"
    },
    {
      "name": "Mail",
      "image": "./../../assets/img/mail-logo.png",
      "link": ""
    },
    {
      "name": "LinkedIn",
      "image": "./../../assets/img/linkedin-logo.png",
      "link": ""
    },
  ];

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
