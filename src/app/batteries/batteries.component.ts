import { Component, OnInit } from '@angular/core';
import { Battery } from '../battery';
import { Batteries } from '../mock-battery';

@Component({
  selector: 'app-batteries',
  templateUrl: './batteries.component.html',
  styleUrls: ['./batteries.component.css']
})
export class BatteriesComponent implements OnInit {
  titlePage: string = "Les batteries d'ordinateur portable";
  batteris: Battery[] = Batteries;
  selectedBattery: Battery;
  constructor() { }

  ngOnInit() {
  }
  onSelect(battery: Battery) {
    //console.log(album);
    this.selectedBattery = battery;
    console.log(this.selectedBattery)
  }

}
