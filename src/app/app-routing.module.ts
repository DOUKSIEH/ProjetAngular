import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BatteriesComponent } from './batteries/batteries.component';
import { BatteryDetailsComponent } from './battery-details/battery-details.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Batteries', canActivate: [AuthGuardService], component: BatteriesComponent },
//  { path: 'Batteries/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'batteries/:id', canActivate: [AuthGuardService], component: BatteryDetailsComponent },
  { path: '', redirectTo: 'batteries', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
