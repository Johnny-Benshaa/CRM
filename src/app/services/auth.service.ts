import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import 'rxjs-compat';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedin: boolean = false;
  public userEmail: string = "";
  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      if (res.user.email) {
        this.userEmail = res.user.email
        this.isLoggedin = true;
      }
      else {
        console.log("not logged in");
        //this.isLoggedin = false
      }
    })
  }

  getUserData() {
    return { email: this.userEmail, loggedIn: this.isLoggedin };
  }
  LogIn(email: string, psw: string) {
    return new Promise((res, rej) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, psw)
        .then(userData => res(userData), err => rej(err));
    })
  }

  getAuth() {
    return this.angularFireAuth.authState.pipe(map(auth => auth));
  }
}
