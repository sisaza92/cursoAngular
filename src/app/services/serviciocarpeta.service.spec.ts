import { TestBed, inject } from '@angular/core/testing';

import { ServiciocarpetaService } from './serviciocarpeta.service';

describe('ServiciocarpetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciocarpetaService]
    });
  });

  it('should be created', inject([ServiciocarpetaService], (service: ServiciocarpetaService) => {
    expect(service).toBeTruthy();
  }));
});
