import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name: string = '';
  surname: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  notification: boolean = false;
  contactForm: FormGroup  = new FormGroup({});;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    fetch("https://formsubmit.co/ajax/info@roofproblems.co.za", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    this.notification = !this.notification
  }
}
