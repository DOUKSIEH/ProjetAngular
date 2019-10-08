import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySingleComponent } from './battery-single.component';

describe('BatterySingleComponent', () => {
  let component: BatterySingleComponent;
  let fixture: ComponentFixture<BatterySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
