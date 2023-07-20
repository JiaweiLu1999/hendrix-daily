import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmitLoginForm(form: NgForm) {
    this.authService.onLogin(form.value["email"], form.value["password"]);
    this.authService.authStatusSub.subscribe((user)=> {
      if (user) {
        this.router.navigate(['/']);
      }
    })
  }
}
