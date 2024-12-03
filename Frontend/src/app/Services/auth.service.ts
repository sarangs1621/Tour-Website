import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any = null;
  private loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn()); // Initialize with current login state

  login(user: any): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user)); // Save user in localStorage
    this.loginStatus.next(true); // Notify components of login state change
  }

  getUser(): any {
    return this.user || JSON.parse(localStorage.getItem('user') || '{}');
  }

  isLoggedIn(): boolean {
    return !!this.getUser() && this.getUser().email; // Check if user exists
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user'); // Clear user data
    this.loginStatus.next(false); // Notify components of logout state change
  }

  getLoginStatus() {
    return this.loginStatus.asObservable(); // Expose the login status as an observable
  }
}
