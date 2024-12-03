import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import { TransportationComponent } from './transportation/transportation.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TravelInfoComponent} from './travel-info/travel-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {PackagesModule} from "./packages/packages/packages.module";
import {MatTableModule} from "@angular/material/table";
import { BookNowComponent } from './packages/subpackages/details-packages/book-now/book-now.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from "../environments/environment.prod";
import {RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY} from "ng-recaptcha";
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransportationComponent,
    TravelInfoComponent,
    BookNowComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    AdminHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ExtendedModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatTooltipModule,
    PackagesModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    RecaptchaV3Module
  ],
  providers: [{
    provide: [HeaderComponent, RECAPTCHA_V3_SITE_KEY],
    useValue: environment.firebase.recaptcha.siteKey
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
