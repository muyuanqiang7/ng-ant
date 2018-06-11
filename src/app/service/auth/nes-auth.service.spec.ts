import { TestBed, inject } from '@angular/core/testing';

import { NesAuthService } from './nes-auth.service';

describe('NesAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NesAuthService]
    });
  });

  it('should be created', inject([NesAuthService], (service: NesAuthService) => {
    expect(service).toBeTruthy();
  }));
});
