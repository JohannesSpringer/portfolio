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

  elementIsVisible(ele: HTMLElement) {
    const rect = ele.getBoundingClientRect();    
    return (
      rect.top >= 0 - 100 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100
    );
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  scrollToElement(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const topOffset = element.offsetTop - offset;
      window.scrollTo({ top: topOffset, behavior: 'smooth'});
    }
  }
}
