import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs'; // for error handling

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = ''; // To store any error message

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, // Inject Router for navigation
    private http: HttpClient // Inject HttpClient for HTTP requests
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      const requestBody = { name, email, password };

      // Make the HTTP request to the backend to register the user
      this.http.post('http://localhost:3000/api/auth/register', requestBody)
        .pipe(
          catchError(err => {
            this.errorMessage = 'Registration failed. Please try again.'; // Set error message if registration fails
            return of(err); // Return error to handle it gracefully
          })
        )
        .subscribe(response => {
          if (response && response['message'] === 'User registered successfully') {
            // If registration is successful, navigate to the login page
            this.router.navigate(['/login']);
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
