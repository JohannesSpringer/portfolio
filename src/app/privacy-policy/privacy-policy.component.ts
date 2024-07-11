import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  isPrivacyPolicy: boolean = false;
  sharedService = inject(SharedService);

  constructor(private router: Router) {
    this.isPrivacyPolicy = this.router.isActive('/privacy-policy', true);
  }

  scrollToElement(elementId: string, offset: number) {
    if (this.isPrivacyPolicy) {
      this.router.navigate(['']);
      setTimeout(() => {
        this.sharedService.scrollToElement(elementId, offset);
      }, 100);
    } else this.sharedService.scrollToElement(elementId, offset);
  }
}
