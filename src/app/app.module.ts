import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes} from '@angular/router'; // module des routes et classe de Typage
import { RouterModule} from '@angular/router'; // module des routes et classe de Typage

import { AppComponent } from './app.component';
import { BatteriesComponent } from './batteries/batteries.component';
import { BatteryDetailsComponent } from './battery-details/battery-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BatteryListComponent } from './battery-list/battery-list.component';
import { BatterySingleComponent } from './battery-single/battery-single.component';
import { BatteryFormComponent } from './battery-form/battery-form.component';
import { BatteryUpdateComponent } from './battery-update/battery-update.component';

// const BatRoutes: Routes = [
//   {
//   path: 'batteries',
//   component: BatteriesComponent
//   },
//   {
//   path: '',
//   redirectTo: '/batteries',
//   pathMatch: 'full'
//   },
//   {
//   path: 'login',
//   component: LoginComponent
//   },
//   {
//   path: 'signup',
//   component: SignupComponent
//   }
//   ,
//   {
//   path: 'battery/:id',
//   component: BatteryDetailsComponent
//   },
//   //{
//   // path: 'paginate',
//   // component: PaginateComponent
//   // }

//   ];
@NgModule({
  declarations: [
    AppComponent,
    BatteriesComponent,
    BatteryDetailsComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    BatteryListComponent,
    BatterySingleComponent,
    BatteryFormComponent,
    BatteryUpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // importez le module
    ReactiveFormsModule,
    //RouterModule.forRoot(BatRoutes), // chargement des routes dans l'application
  ],
  providers:  [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
