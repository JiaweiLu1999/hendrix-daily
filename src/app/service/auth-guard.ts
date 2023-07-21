import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {map, Observable, Subscription, take} from "rxjs";
import {AuthService} from "./auth.service";

import {onAuthStateChanged} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.authService.auth, (user)=> {
        if (user) {
          resolve(true);
        }
        else {
          console.log('authguard' + user);
          this.router.navigate(['/login']);
          resolve(false);
        }
      })
    })
  };
}
