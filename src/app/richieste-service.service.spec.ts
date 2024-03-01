import { TestBed } from '@angular/core/testing';

import { RichiesteServiceService } from './richieste-service.service';

describe('RichiesteServiceService', () => {
  let service: RichiesteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RichiesteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
