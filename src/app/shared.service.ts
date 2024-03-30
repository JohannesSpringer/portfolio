import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
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

  constructor() { }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
