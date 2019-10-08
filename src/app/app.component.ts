import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyDavnubH0Yga9qbWvuA2SQ5KmpfnKG7MEo",
      authDomain: "projetangular-842ec.firebaseapp.com",
      databaseURL: "https://projetangular-842ec.firebaseio.com",
      projectId: "projetangular-842ec",
      storageBucket: "projetangular-842ec.appspot.com",
      messagingSenderId: "193076966313",
      appId: "1:193076966313:web:8de0ee851ba641273d8ab8",
      measurementId: "G-N0GHLPGFJC"
    };
    firebase.initializeApp(config);
  }
}
