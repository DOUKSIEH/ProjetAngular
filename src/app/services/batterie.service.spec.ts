import { TestBed } from '@angular/core/testing';

import { BatterieService } from './batterie.service';

describe('BatterieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatterieService = TestBed.get(BatterieService);
    expect(service).toBeTruthy();
  });
});
