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
      "link": "mailto:johannes.springer93@gmx.de"
    },
    {
      "name": "LinkedIn",
      "image": "./../../assets/img/linkedin-logo.png",
      "link": "https://www.linkedin.com/in/johannes-springer-6a2866140/"
    },
  ];

  constructor() { 
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  scrollToElement(elementId: string, offset: number) {
    console.log(elementId);
    const element = document.getElementById(elementId);
    console.log("Element: ", element);
    if (element) {
      console.log("Starte scrollen.")
      const topOffset = element.offsetTop - offset;
      window.scrollTo({ top: topOffset, behavior: 'auto'});
    }
  }
}
