import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CleanComponent} from "./clean/clean.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clean', component: CleanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
