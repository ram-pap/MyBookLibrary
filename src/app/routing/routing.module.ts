import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGaurd } from '../helpers/auth.gaurd'

const routes: Routes = [
  {path:'home',component: HomeComponent,canActivate: [AuthGaurd]},
  {path:':type/:olid/:title',component:DashboardComponent},
  {path: 'login',component: LoginComponent},
  {path: 'subject/:name',component: SubjectsComponent},
  {path: 'search/:q',component:SearchComponent},
  {path: 'search', component:SearchComponent},
  {path: 'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
 
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
