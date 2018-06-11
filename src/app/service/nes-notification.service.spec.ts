import { TestBed, inject } from '@angular/core/testing';

import { NesNotificationService } from './nes-notification.service';

describe('NesNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NesNotificationService]
    });
  });

  it('should be created', inject([NesNotificationService], (service: NesNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
