import { TestBed } from '@angular/core/testing';

import { ReimburseService } from './reimburse.service';

describe('ReimburseService', () => {
  let service: ReimburseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimburseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
