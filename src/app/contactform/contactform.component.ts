import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  mailTest: boolean = false;
  buttonValue: string = 'Say hello ;)';
  languageService = inject(LanguageService);


  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };
  inputFocused: boolean[] = [false, false, false];
  formSubmitted: boolean = false;
  checkboxChecked: boolean = false;

  post = {
    endPoint: 'https://johannes-springer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor() {
    this.checkScreenWidth();
  }

  sendMail(ngForm: NgForm) {
    this.checkboxChecked = ngForm.controls['checkboxPrivacyPolicy'].value;
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.checkboxChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            setTimeout(() => {
              ngForm.resetForm();
              this.formSubmitted = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
          },

        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checkboxChecked && this.mailTest) {
      // ngForm.resetForm();
      console.log("Test Mail success");
      setTimeout(() => {
        ngForm.resetForm();
        this.formSubmitted = false;
      }, 5000);
    }
  }

  onInputFocus(i: number) {
    this.inputFocused[i] = true;
  }

  onInputBlur(i: number) {
    this.inputFocused[i] = false;
  }

  notCheckedAndSubmitted(): boolean {
    return !this.checkboxChecked && this.formSubmitted;
  }

  checkScreenWidth() {
    if (window.innerWidth >= 768) {
      this.buttonValue = 'Send message';
    } else {
      this.buttonValue = 'Say hello ;)';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
}
