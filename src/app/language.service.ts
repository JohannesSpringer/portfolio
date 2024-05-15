import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
    this.currentLanguage = translate.currentLang;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
