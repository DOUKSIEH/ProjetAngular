import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryFormComponent } from './battery-form.component';

describe('BatteryFormComponent', () => {
  let component: BatteryFormComponent;
  let fixture: ComponentFixture<BatteryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
