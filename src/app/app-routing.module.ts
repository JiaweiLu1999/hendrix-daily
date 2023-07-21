import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CleanComponent} from "./clean/clean.component";
import {SignupComponent} from "./signup/signup.component";
import {ProfileComponent} from "./profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuard} from "./service/auth-guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TodoCardComponent} from "./clean/todo-card/todo-card.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'clean', component: CleanComponent, canActivate: [AuthGuard],
  children: [
    {path: 'add', component: TodoCardComponent}
  ]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
