import { TestBed, inject } from '@angular/core/testing';

import { ReadmsgserviceService } from './readmsgservice.service';

describe('ReadmsgserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadmsgserviceService]
    });
  });

  it('should be created', inject([ReadmsgserviceService], (service: ReadmsgserviceService) => {
    expect(service).toBeTruthy();
  }));
});
