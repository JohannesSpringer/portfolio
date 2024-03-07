import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';

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
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [provideRouter(routes), provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
