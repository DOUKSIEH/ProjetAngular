import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Battery } from '../battery';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class BatterieService {

    batteris: Battery[] = [];
   batsSubject = new Subject<Battery[]>();
  
    constructor() {
      this.getBooks();
  }
    emitBooks() {
      this.batsSubject.next(this.batteris);
    }
   //
    saveBooks() {
      firebase.database().ref('/books').set(this.batteris);
    }
    getBooks() {
      firebase.database().ref('/books')
        .on('value', (data: firebase.database.DataSnapshot) => {
            this.batteris = data.val() ? data.val() : [];
            this.emitBooks();
          }
        );
    }
  
    getSingleBook(id: number) {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/books/' + id).once('value').then(
            (data: firebase.database.DataSnapshot) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }

    createNewBook(newBook: Battery) {
      this.batteris.push(newBook);
      this.saveBooks();
      this.emitBooks();
    }
  
    removeBat(battery: Battery) {
      const bookIndexToRemove = this.batteris.findIndex(
        (battEl) => {
          if(battEl === battery) {
            return true;
          }
        }
      );
      this.batteris.splice(bookIndexToRemove, 1);
      this.saveBooks();
      this.emitBooks();
    }
  }
