import { Batt } from './../models/battery.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BatterieService } from '../services/batterie.service';


@Component({
  selector: 'app-battery-form',
  templateUrl: './battery-form.component.html',
  styleUrls: ['./battery-form.component.css']
})
export class BatteryFormComponent implements OnInit {
  batForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private batterieService: BatterieService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.batForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacite: ['', Validators.required],
      tension: ['', Validators.required],
      dimension: ['', Validators.required],
      description: ['', Validators.required],
      price: [ , Validators.required],
      synopsis: ''
    });
  }
  
  onSaveBat() {
    const name = this.batForm.get('name').value;
    const capacite = this.batForm.get('capacite').value;
    const tension = this.batForm.get('tension').value;
    const dimension = this.batForm.get('dimension').value;
    const desciption = this.batForm.get('description').value;
    const price = this.batForm.get('price').value;
    const synopsis = this.batForm.get('synopsis').value;
    const newBat = new Batt(name, capacite, tension, dimension,desciption,price);
    newBat.synopsis = synopsis;
    this.batterieService.createNewBat(newBat);
    this.router.navigate(['/admin']);
  }
}