import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'empDetails', component: EmployeeDetailsComponent},
  { path: 'signUp', component: SignupComponent},
  { path: ' ', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
