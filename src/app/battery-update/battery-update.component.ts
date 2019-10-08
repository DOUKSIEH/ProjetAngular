import { Batt } from './../models/battery.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BatterieService } from '../services/batterie.service';

@Component({
  selector: 'app-battery-update',
  templateUrl: './battery-update.component.html',
  styleUrls: ['./battery-update.component.css']
})
export class BatteryUpdateComponent implements OnInit {

  
  updateBatForm: FormGroup;
  batId: number;
  bat: Batt;

  constructor(private formBuilder: FormBuilder,
              private batsService: BatterieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() 
  {
    this.initForm();
    this.batId = this.route.snapshot.params['id'];
    this.batsService.getSingleBat(this.batId).then(
          (bat: Batt) => {
            this.bat = bat;
            this.updateBatForm.get('name').setValue(this.bat.name);
            this.updateBatForm.get('capacite').setValue(this.bat.capacite);
            this.updateBatForm.get('tension').setValue(this.bat.tension);
            this.updateBatForm.get('dimension').setValue(this.bat.dimension);
            this.updateBatForm.get('description').setValue(this.bat.description)
            this.updateBatForm.get('price').setValue(this.bat.price);
         // console.log(bat)
          }
      );
  }

  initForm() {
    this.updateBatForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacite: ['', Validators.required],
      tension: ['', Validators.required],
      dimension: ['', Validators.required],
      description: ['', Validators.required],
      price: [, Validators.required],
    });
  }

  onSubmit() {
    this.bat.name = this.updateBatForm.get('name').value;
    this.bat.capacite = this.updateBatForm.get('capacite').value;
    this.bat.tension = this.updateBatForm.get('tension').value;
    this.bat.dimension = this.updateBatForm.get('dimension').value;
    this.bat.description = this.updateBatForm.get('description').value;
    this.bat.price = this.updateBatForm.get('price').value;
    this.batsService.updateBat(this.batId, this.bat);

    this.router.navigate(['/bats']);
    /*
    const title = this.updatebatForm.get('title').value;
    const author = this.updatebatForm.get('author').value;
    const synopsis = this.updatebatForm.get('synopsis').value;
    const newbat = new bat (title, author);
    newbat.synopsis = synopsis;
    this.batsService.updatebat(newbat);

    this.router.navigate(['/bats']);
    */
  }
}
