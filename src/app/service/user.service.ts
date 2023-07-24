import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {UserEntity} from "./user.entity";
import {child, get, ref, update} from "firebase/database";
import {TodoItem} from "../clean/todoItem";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserEntity = new UserEntity('', '', '');
  uid: string = '';

  constructor(private authService: AuthService) { }

  getCurrentUser() {
    let authUser = this.authService.auth.currentUser;
    if (authUser) {

      this.getUserInfo(authUser.email);
    } else {
      //error
    }
  }

  getUserInfo(email: string|null) {
    get(child(ref(this.authService.database), 'users/')).then((snapshot) => {
      if (snapshot.exists()) {
        let users = snapshot.val();
        for (let key in users) {
          let entity: UserEntity = users[key];

          if (entity.email == email) {
            this.user = entity;
            this.uid = key;
          }
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  updateUserInfo(username: string, avatarUrl: string) {
    this.user = new UserEntity(this.user.email, username, avatarUrl);
    update(ref(this.authService.database, 'users/' + this.uid), this.user);
  }
}
