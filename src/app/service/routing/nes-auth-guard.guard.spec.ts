import { TestBed, async, inject } from '@angular/core/testing';

import { NesAuthGuardGuard } from './nes-auth-guard.guard';

describe('NesAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NesAuthGuardGuard]
    });
  });

  it('should ...', inject([NesAuthGuardGuard], (guard: NesAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
