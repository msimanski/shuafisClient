import { TestBed } from '@angular/core/testing';

import { CompareOneToNService } from './compare-one-to-n.service';

describe('CompareOneToNService', () => {
  let service: CompareOneToNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareOneToNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
