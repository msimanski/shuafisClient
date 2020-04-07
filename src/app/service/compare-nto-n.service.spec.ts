import { TestBed } from '@angular/core/testing';

import { CompareNToNService } from './compare-nto-n.service';

describe('CompareNToNService', () => {
  let service: CompareNToNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareNToNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
