import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from 'D:/Coding/Angular/Angular Project - Tour Website - Copy/Frontend/src/app/Services/booking.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  title: string = 'Dhew';

  form: FormGroup = this.formBuilder.group({
    focal_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    arrival_date: ['', Validators.required],
    departure_date: ['', Validators.required],
    head_count: ['', Validators.required],
    social_media_link: ['', Validators.required],
    contact_no: ['', Validators.required],
  });

  constructor(
    private matDialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {}

  confirmation(): void {
    if (this.form.valid) {
      // Call the booking service to save the form data
      this.bookingService.bookTour({
        focal_name: this.form.value.focal_name,
        package_name: this.title, // Assuming title is the package name
        email: this.form.value.email,
        arrival_date: this.form.value.arrival_date,
        departure_date: this.form.value.departure_date,
        head_count: this.form.value.head_count,
        social_media_link: this.form.value.social_media_link,
        contact_no: this.form.value.contact_no,
      }).subscribe({
        next: (response) => {
          alert('Booking successful!');
          this.form.reset();
          this.matDialogRef.close(); // Close the dialog
        },
        error: (err) => {
          console.log(1);
          alert('Failed to book. Please try again.');
          console.error(err);
        }
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  cancel():void {
    this.matDialogRef.close();
  }
}
