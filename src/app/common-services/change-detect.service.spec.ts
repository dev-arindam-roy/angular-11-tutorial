import { TestBed } from '@angular/core/testing';

import { ChangeDetectService } from './change-detect.service';

describe('ChangeDetectService', () => {
  let service: ChangeDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
