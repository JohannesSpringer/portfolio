import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  mailTest: boolean = false;

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

  uxIds = [
    'uxWait',
    'uxError',
    'uxSuccess'
  ];

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

  constructor() { }

  sendMail(ngForm: NgForm) {
    this.checkboxChecked = ngForm.controls['checkboxPrivacyPolicy'].value;
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.checkboxChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            document.getElementById(this.uxIds[0])?.classList.remove('d-none');
          },
          error: (error) => {
            document.getElementById(this.uxIds[0])?.classList.add('d-none');
            document.getElementById(this.uxIds[1])?.classList.remove('d-none');
            console.error(error);
            setTimeout(() => {
              ngForm.resetForm();
              this.formSubmitted = false;
              document.getElementById(this.uxIds[1])?.classList.add('d-none');
            }, 5000);
          },
          complete: () => {
            document.getElementById(this.uxIds[0])?.classList.add('d-none');
            document.getElementById(this.uxIds[2])?.classList.remove('d-none');
            console.info('send post complete');
            setTimeout(() => {
              ngForm.resetForm();
              this.formSubmitted = false;
              document.getElementById(this.uxIds[2])?.classList.add('d-none');

            }, 2000);
          },

        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checkboxChecked && this.mailTest) {
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

  onResize(event: any) {
    this.languageService.onResize(event);
  }
}
