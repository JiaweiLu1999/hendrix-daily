import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { CleanComponent } from './clean/clean.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoCardComponent } from './clean/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CleanComponent,
    HeaderComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    DashboardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
