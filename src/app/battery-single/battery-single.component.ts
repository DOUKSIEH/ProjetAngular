import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batt } from '../models/battery.model';
import { BatterieService } from '../services/batterie.service';


@Component({
  selector: 'app-battery-single',
  templateUrl: './battery-single.component.html',
  styleUrls: ['./battery-single.component.css']
})
export class BatterySingleComponent implements OnInit {

  bat: Batt;
  id:number;
  constructor(private route: ActivatedRoute, private batterieService: BatterieService,
    private router: Router) {}

ngOnInit() {
this.bat = new Batt('','','','','', 1);
const id = this.route.snapshot.params['id'];
this.id = id
console.log(this.id)
this.batterieService.getSingleBat(+id).then(
(bat: Batt) => {
this.bat = bat;

console.log(bat)
}
);
}

onBack() {
this.router.navigate(['/admin']);
}
}