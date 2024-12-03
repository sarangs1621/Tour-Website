import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from "../home.component";
import { SwiperModule} from "swiper/angular";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    SwiperModule
  ],
  providers : [SwiperModule]
})
export class HomeModule { }
