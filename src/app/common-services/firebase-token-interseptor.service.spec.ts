import { TestBed } from '@angular/core/testing';

import { FirebaseTokenInterseptorService } from './firebase-token-interseptor.service';

describe('FirebaseTokenInterseptorService', () => {
  let service: FirebaseTokenInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseTokenInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
