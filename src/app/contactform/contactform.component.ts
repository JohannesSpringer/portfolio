import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {

  contactData = {
    name: "",
    email:"",
    message:"",
  };
  formSubmitted = false;

  sendMail(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log("Gesendet", this.contactData);    

    }
    this.formSubmitted = true;
  }
}
