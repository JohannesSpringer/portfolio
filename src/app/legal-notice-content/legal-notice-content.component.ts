import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice-content',
  templateUrl: './legal-notice-content.component.html',
  styleUrl: './legal-notice-content.component.scss'
})
export class LegalNoticeContentComponent {
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
