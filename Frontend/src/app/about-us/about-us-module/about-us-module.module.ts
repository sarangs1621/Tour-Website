import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsModuleRoutingModule } from './about-us-module-routing.module';
import { AboutUsComponent} from "../about-us.component";

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsModuleRoutingModule
  ]
})
export class AboutUsModuleModule { }
