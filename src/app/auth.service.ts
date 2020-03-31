import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:  User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem('username', email);
        this.router.navigate(['main']);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  getData(){
    this.afAuth.authState.forEach(auth => {console.log(auth.uid)})
     
  }
  logout(){
    this.afAuth.auth.signOut();
  }



}
