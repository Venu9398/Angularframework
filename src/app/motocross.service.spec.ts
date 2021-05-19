import { TestBed } from '@angular/core/testing';

import { MotocrossService } from './motocross.service';

describe('MotocrossService', () => {
  let service: MotocrossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotocrossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
