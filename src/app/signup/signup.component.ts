import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmitSignUpForm(form: NgForm) {
    this.authService.onSignUp(form.value["email"], form.value["password"], form.value["username"]);
    this.router.navigate(['/login']);
  }
}
