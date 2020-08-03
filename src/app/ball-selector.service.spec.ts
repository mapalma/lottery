import { TestBed } from '@angular/core/testing';

import { BallSelectorService } from './ball-selector.service';

describe('BallSelectorService', () => {
  let service: BallSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
