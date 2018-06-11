import { TestBed, inject } from '@angular/core/testing';

import { NesPermissionCheckService } from './nes-permission-check.service';

describe('NesPermissionCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NesPermissionCheckService]
    });
  });

  it('should be created', inject([NesPermissionCheckService], (service: NesPermissionCheckService) => {
    expect(service).toBeTruthy();
  }));
});
