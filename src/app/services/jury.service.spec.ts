import { TestBed, inject } from '@angular/core/testing';

import { JuryService } from './jury.service';

describe('JuryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuryService]
    });
  });

  it('should be created', inject([JuryService], (service: JuryService) => {
    expect(service).toBeTruthy();
  }));
});
