import {Injectable} from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, User, signOut} from "firebase/auth";
import {BehaviorSubject} from "rxjs";
import {TodoItem} from "../clean/todoItem";

const firebaseConfig = {
  apiKey: "AIzaSyCRSi1Jtt3x3StAOQ6-lPn4a7ynLR9_JIc",
  authDomain: "hendrix-daily.firebaseapp.com",
  databaseURL: "https://hendrix-daily-default-rtdb.firebaseio.com",
  projectId: "hendrix-daily",
  storageBucket: "hendrix-daily.appspot.com",
  messagingSenderId: "300323447076",
  appId: "1:300323447076:web:2872b2a2e483c1acd953b1",
  measurementId: "G-RR6R34KZVK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




@Injectable({
  providedIn: 'root'
})
export class AuthService{
  authStatusSub = new BehaviorSubject<User|null>(null);
  auth = getAuth(app);
  database = getDatabase(app);

  constructor() {

  }

  onSignUp(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {

      }
    ).catch((error) => {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  onLogin(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  onLogout() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

}
