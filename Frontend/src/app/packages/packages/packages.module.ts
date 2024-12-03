import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent} from "../packages.component";
import { DetailsPackagesComponent} from "../subpackages/details-packages/details-packages.component";
import {SubpackagesComponent} from "../subpackages/subpackages.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import {environment} from "../../../environments/environment.prod";

@NgModule({
  declarations: [
    PackagesComponent,
    DetailsPackagesComponent,
    SubpackagesComponent
  ],
    imports: [
        CommonModule,
        PackagesRoutingModule,
        MatExpansionModule,
        MatButtonModule,
        MatDialogModule,
        RecaptchaV3Module
    ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.firebase.recaptcha.siteKey
  }]
})
export class PackagesModule { }
