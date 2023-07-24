import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {User} from "firebase/auth";
import {UserService} from "../service/user.service";
import {UserEntity} from "../service/user.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  constructor(public userService: UserService) {
    this.userService.getCurrentUser();
  }

  onSaveUserInfo(form: NgForm) {
    this.userService.updateUserInfo(form.value["username"], '');
  }

}
