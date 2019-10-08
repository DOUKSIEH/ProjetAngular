import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryUpdateComponent } from './battery-update.component';

describe('BatteryUpdateComponent', () => {
  let component: BatteryUpdateComponent;
  let fixture: ComponentFixture<BatteryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
