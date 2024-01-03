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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadlineComponent,
    ContactLinkComponent,
    AboutMeComponent,
    MySkillsComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
