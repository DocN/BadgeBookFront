import { TestBed, inject } from '@angular/core/testing';

import { APIURLserviceService } from './apiurlservice.service';

describe('APIURLserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIURLserviceService]
    });
  });

  it('should be created', inject([APIURLserviceService], (service: APIURLserviceService) => {
    expect(service).toBeTruthy();
  }));
});
