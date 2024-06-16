import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  languageService = inject(LanguageService);

  constructor(private router: Router) {}

  navigateToLandingPage() {
    this.router.navigate(['/']);
    window.scrollTo(0, 0);
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
