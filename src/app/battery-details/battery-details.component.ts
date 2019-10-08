import { Component, OnInit } from '@angular/core';
import { Battery } from '../battery';
import { Batteries } from '../mock-battery';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-battery-details',
  templateUrl: './battery-details.component.html',
  styleUrls: ['./battery-details.component.css']
})
export class BatteryDetailsComponent implements OnInit {
 
  batteris: Battery[] = Batteries; // _ convention private et protected
  batteri: Battery;
  constructor(private route: ActivatedRoute,private router: Router) { 
     // récupérez le service route
  }
 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.batteri = this.getBattery(id);
  }
  getBattery(id: string): Battery  {

    return this.batteris.find(bat => bat.id === id);
  }
  onBack() {
    this.router.navigate(['batteries']);
    }
  
}
