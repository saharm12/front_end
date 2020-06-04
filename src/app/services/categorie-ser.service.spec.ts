import { TestBed, inject } from '@angular/core/testing';

import { CategorieSerService } from './categorie-ser.service';

describe('CategorieSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorieSerService]
    });
  });

  it('should be created', inject([CategorieSerService], (service: CategorieSerService) => {
    expect(service).toBeTruthy();
  }));
});
