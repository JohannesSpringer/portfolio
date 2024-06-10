import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
