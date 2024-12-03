import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  hasScrolled = false;
  sideNav:boolean = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(): void {
    // Subscribe to login status changes
    this.authService.getLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
      const user = this.authService.getUser();
      this.isAdmin = user?.role === 'admin';
    });

    // Initialize login state
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  @HostListener("document:scroll")
  navBgChange(){
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ? this.hasScrolled = true : this.hasScrolled = false;
  }

  toogleSideNav() {
    this.sideNav = !this.sideNav;
  }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
