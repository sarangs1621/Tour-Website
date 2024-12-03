import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const requestBody = { email, password };

      this.http.post('http://localhost:3000/api/auth/login', requestBody).subscribe(
        (response: any) => {
          if (response && response.user) {
            const { role } = response.user;

            // Login successful, save user details in AuthService
            this.authService.login(response.user);

            // Redirect based on role
            if (role === 'admin') {
              this.router.navigate(['/admin']); // Redirect admin to dashboard
            } else if (role === 'user') {
              this.router.navigate(['/home/home']); // Redirect user to home
            } else {
              this.errorMessage = 'Unknown role, unable to redirect.';
            }
          }
        },
        (error) => {
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message; // Show error message to user
          }
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
