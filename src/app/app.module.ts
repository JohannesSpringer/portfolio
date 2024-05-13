import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { ContactLinkComponent } from './contact-link/contact-link.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ArrowComponent } from './arrow/arrow.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactformComponent } from './contactform/contactform.component';
import { HttpBackend, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'locale/', '.xlf');
// }
export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend), './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadlineComponent,
    ContactLinkComponent,
    AboutMeComponent,
    MySkillsComponent,
    ArrowComponent,
    PortfolioComponent,
    ContactformComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpBackend]
      }
    })
  ],
  providers: [provideRouter(routes), provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }
}
