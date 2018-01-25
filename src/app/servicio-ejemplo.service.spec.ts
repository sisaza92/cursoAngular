import { TestBed, inject } from '@angular/core/testing';

import { ServicioEjemploService } from './servicio-ejemplo.service';

describe('ServicioEjemploService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioEjemploService]
    });
  });

  it('should be created', inject([ServicioEjemploService], (service: ServicioEjemploService) => {
    expect(service).toBeTruthy();
  }));
});
