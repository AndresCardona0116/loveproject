import { TestBed } from '@angular/core/testing';

import { AlertSawalService } from './alert-sawal.service';

describe('AlertSawalService', () => {
  let service: AlertSawalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSawalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
