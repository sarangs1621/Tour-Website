import {Component, OnDestroy} from '@angular/core';
import {routingAnimation} from "./Interfaces/app.animation";
import {filter, Observable, Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent implements OnDestroy{
  isLoggedIn = false;
  constructor(private router: Router,
              private recapChaV3Service: ReCaptchaV3Service,
              public authService: AuthService) {
  }
  title = 'e-commerce';
 backgroundImageFooter = '/assets/paro-tak.jpeg'
  tokenVisible: boolean = false;
  reCAPTCHAToken: string = "";
  subscription!: Subscription;

  ngOnInit(){
   this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.scrollTo({
          top: 200,
          behavior: 'smooth',
        });
        this.recapChaV3Service.execute('importantAction').subscribe((token: string) => {
          this.tokenVisible = true;
          this.reCAPTCHAToken = `${token}`;
        });
      });
  }


  ngOnDestroy() : void {
    this.subscription && this.subscription.unsubscribe()
  }
  logout() {
    this.authService.logout();  // Clear the token or logged-in status
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
