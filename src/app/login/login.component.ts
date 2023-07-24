import {Component, OnDestroy} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{
  authSub: Subscription | null = null;
  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmitLoginForm(form: NgForm) {
    this.authService.onLogin(form.value["email"], form.value["password"]);
    this.authSub = this.authService.authStatusSub.subscribe((user)=> {
      if (user) {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
