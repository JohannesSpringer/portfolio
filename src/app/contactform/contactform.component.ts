import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  mailTest: boolean = true;

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
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  sendMail(ngForm: NgForm) {
    this.checkboxChecked = ngForm.controls['checkboxPrivacyPolicy'].value;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.checkboxChecked) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checkboxChecked && this.mailTest) {

      ngForm.resetForm();
    }
    this.formSubmitted = true;
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
}
