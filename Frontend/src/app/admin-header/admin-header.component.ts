import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  @Output() activeTabChange = new EventEmitter<string>();
  activeTab: string = 'users';

  constructor(private authService: AuthService, private router: Router) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.activeTabChange.emit(tab);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
