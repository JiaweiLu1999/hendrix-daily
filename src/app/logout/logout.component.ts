import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {
    authService.onLogout();
  }
}
