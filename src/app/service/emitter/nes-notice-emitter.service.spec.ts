import { TestBed, inject } from '@angular/core/testing';

import { NesNoticeEmitterService } from './nes-notice-emitter.service';

describe('NesNoticeEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NesNoticeEmitterService]
    });
  });

  it('should be created', inject([NesNoticeEmitterService], (service: NesNoticeEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
