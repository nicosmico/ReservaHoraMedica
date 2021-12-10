import { TestBed } from '@angular/core/testing';

import { HoraMedicaService } from './hora-medica.service';

describe('HoraMedicaService', () => {
  let service: HoraMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoraMedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
