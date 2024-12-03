import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationComponent } from "./transportation/transportation.component";
import { TravelInfoComponent } from "./travel-info/travel-info.component";
import { LoginComponent } from "./login/login.component"; // Import the login component
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from './admin/admin.component'; // Import the register component
import { AuthGuard } from './/auth.guard';

const routes: Routes = [
  // Default route redirects to the login page
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login and Register routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Other existing routes
  { path: 'home', loadChildren: () => import('./home/home/home.module').then(val => val.HomeModule), canActivate:[AuthGuard] },
  { path: 'about_us', loadChildren: () => import('./about-us/about-us-module/about-us-module.module').then(val => val.AboutUsModuleModule), canActivate:[AuthGuard] },
  { path: 'travel_info', component: TravelInfoComponent, canActivate:[AuthGuard] },
  { path: 'packages', loadChildren: () => import('./packages/packages/packages.module').then(val => val.PackagesModule), canActivate:[AuthGuard] },
  { path: 'faq', component: TransportationComponent, canActivate:[AuthGuard] },
  { path: 'contact_us', loadChildren: () => import('./contact-us/contact-us/contact-us.module').then(val => val.ContactUsModule), canActivate:[AuthGuard] },
  {path: 'admin', component: AdminComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
