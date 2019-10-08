import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import * as firebase from 'firebase';
import { Batt } from '../models/battery.model';


@Injectable({
  providedIn: 'root'
})
export class BatterieService {

    batteris: Batt[] = [];
   batsSubject = new Subject<Batt[]>();
  
    constructor() {
      this.getBats();
  }
    emitBats() {
      this.batsSubject.next(this.batteris);
    }
   //
    saveBats() {
      firebase.database().ref('/admin').set(this.batteris);
    }
    getBats() {
      firebase.database().ref('/admin')
        .on('value', (data: firebase.database.DataSnapshot) => {
            this.batteris = data.val() ? data.val() : [];
            this.emitBats();
          }
        );
    }
  
    getSingleBat(id: number) {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/admin/' + id).once('value').then(
            (data: firebase.database.DataSnapshot) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }

    createNewBat(newBat: Batt) {
      this.batteris.push(newBat);
      this.saveBats();
      this.emitBats();
    }
  
    removeBat(bat: Batt) {
      const batIndexToRemove = this.batteris.findIndex(
        (battEl) => {
          if(battEl === bat) {
            return true;
          }
        }
      );
      this.batteris.splice(batIndexToRemove, 1);
      this.saveBats();
      this.emitBats();
    }
  }
