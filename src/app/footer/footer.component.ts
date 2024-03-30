import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
    './../header/header.component.scss']
})
export class FooterComponent {
  appLinks: any[];
  isClicked: boolean = false;

  constructor(private sharedService: SharedService) {
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

  // scrollToTop() {
  //   document.getElementById("header")?.scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // }
}
