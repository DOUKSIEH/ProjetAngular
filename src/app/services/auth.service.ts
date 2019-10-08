import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private router: Router) { }

    createNewUser(email: string, password: string) {
      return new Promise(
        (resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(email, password).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }
    signInUser(email: string, password: string) {
      return new Promise(
        (resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        }
      );
  }
  signOutUser() {
    return new Promise(
        (resolve, reject) => {
      firebase.auth().signOut().then(
        () => {
          console.log("ca passe")
          this.router.navigate(['/batteries']);
        },
        (error) => {
          console.log("error")
          reject(error);
        }
      );
    }
    );
  
}

}


