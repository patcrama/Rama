import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerdetailsComponent } from './managerdetails/managerdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SignupComponent},
  { path: 'home', component: HomeComponent },
  { path : 'dashboard', 
    component: DashboardComponent,
    children: [
    {
      path: 'empDetails',
      component: EmployeeDetailsComponent,
    },
    {
      path: 'managerDetails',
      component: ManagerdetailsComponent,
    }  
  ]
},
  { path: '*', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
