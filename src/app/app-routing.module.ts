import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BatteriesComponent } from './batteries/batteries.component';
import { BatteryDetailsComponent } from './battery-details/battery-details.component';
import { BatteryFormComponent } from './battery-form/battery-form.component';
import { BatteryListComponent } from './battery-list/battery-list.component';
import { BatterySingleComponent } from './battery-single/battery-single.component';


 const routes: Routes = [
   { path: 'signup', component: SignupComponent },
   { path: 'login', component: LoginComponent },
   { path: 'batteries', component: BatteriesComponent },
   { path: 'batteries/:id', component: BatteryDetailsComponent },
   { path: 'admin/new', component: BatteryFormComponent , canActivate: [AuthGuardService]},
   { path: 'admin/:id', component: BatterySingleComponent , canActivate: [AuthGuardService]},
   { path: 'admin', component: BatteryListComponent , canActivate: [AuthGuardService] },
  
  { path: '', redirectTo: 'batteries', pathMatch: 'full' },
  { path: '**', redirectTo: 'batteries' }
 ];

  @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
  export class AppRoutingModule { }
  