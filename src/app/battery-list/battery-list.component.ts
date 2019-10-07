import { Battery } from '../battery';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatterieService } from '../services/batterie.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-battery-list',
  templateUrl: './battery-list.component.html',
  styleUrls: ['./battery-list.component.css']
})
export class BatteryListComponent implements OnInit , OnDestroy{
  
  batteris: Battery[];
  batteriesSubscription: Subscription;


  constructor(private batService: BatterieService, private router: Router) {}

  ngOnInit() {

    this.batteriesSubscription = this.batService.batsSubject.subscribe(
 
      (bat: Battery[]) => {
        this.batteris = bat;
      }
    );
    this.batService.emitBooks();
  }

  onNewBat() {
    this.router.navigate(['/batteries', 'new']);
  }

  onDeleteBat(bat: Battery) {
    this.batService.removeBat(bat);
  }

  onViewBat(id: number) {
    this.router.navigate(['/batteries', 'view', id]);
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

}
