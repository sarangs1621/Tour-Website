import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup = this.fb.group({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    whatsapp_no: '',
    tourist_no: '',
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  send() {
    this.http
      .post('http://localhost:3000/api/contact-us', {
        firstName: this.form.value.first_name,
        lastName: this.form.value.last_name,
        email: this.form.value.email,
        message: this.form.value.message,
        whatsappNo: this.form.value.whatsapp_no,
        touristNo: this.form.value.tourist_no,
      })
      .subscribe({
        next: () => {
          alert('Message has been saved to the database');
          this.form.reset();
        },
        error: (err) => {
          console.error('Error saving message:', err);
          alert('Failed to save message');
        },
      });
  }
}
