import { TestBed } from '@angular/core/testing';

import { BiddingService } from './bidding-service.service';

describe('BiddingServiceService', () => {
  let service: BiddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
