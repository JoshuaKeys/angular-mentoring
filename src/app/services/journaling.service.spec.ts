import { TestBed } from '@angular/core/testing';

import { JournalingService } from './journaling.service';

describe('JournalingService', () => {
  let service: JournalingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
