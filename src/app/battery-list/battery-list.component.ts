
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatterieService } from '../services/batterie.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Batt } from '../models/battery.model';

@Component({
  selector: 'app-battery-list',
  templateUrl: './battery-list.component.html',
  styleUrls: ['./battery-list.component.css']
})
export class BatteryListComponent implements OnInit , OnDestroy{
  
  batteris: Batt[];
  batteriesSubscription: Subscription;


  constructor(private batService: BatterieService, private router: Router) {}

  ngOnInit() {

    this.batteriesSubscription = this.batService.batsSubject.subscribe(
 
      (bat: Batt[]) => {
        this.batteris = bat;
      }
    );
    this.batService.getBats();
    this.batService.emitBats();
  }

  onNewBat() {
    if(this.router.navigate(['admin', 'new'])){
      console.log('ca marche')
    }
    else{
      console.log('error')
    }
  }

  onDeleteBat(bat: Batt) {
    this.batService.removeBat(bat);
  }

  onViewBat(id: number) {
    this.router.navigate(['/admin', id]);
  }

  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }

}
