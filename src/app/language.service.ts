import { HostListener, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string = 'en';
  buttonValue: string = 'Say hello ;)';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.currentLanguage = translate.currentLang;
    this.checkScreenWidth();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (window.innerWidth >= 768) {
      this.translate.get('sendMessage').subscribe((res: string) => {
        this.buttonValue = res;
      })
    } else {
      // this.buttonValue = 'Say hello ;)';
      this.translate.get('sayHello').subscribe((res: string) => {
        this.buttonValue = res;
      })
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
}
