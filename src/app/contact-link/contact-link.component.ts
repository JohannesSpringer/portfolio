import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-link',
  templateUrl: './contact-link.component.html',
  styleUrls: ['./contact-link.component.scss']
})
export class ContactLinkComponent {

  constructor(private sharedService: SharedService) {}

  scrollToElement(elementId: string, offset: number) {
    this.sharedService.scrollToElement(elementId, offset);
  }
}
