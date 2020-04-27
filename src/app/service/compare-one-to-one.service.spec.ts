import { TestBed } from '@angular/core/testing';

import { CompareOneToOneService } from './compare-one-to-one.service';

describe('CompareOneToOneService', () => {
  let service: CompareOneToOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareOneToOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
