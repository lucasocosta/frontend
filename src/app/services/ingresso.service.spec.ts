import { TestBed } from '@angular/core/testing';

import { IngressoService } from './ingresso.service';

describe('IngressoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngressoService = TestBed.get(IngressoService);
    expect(service).toBeTruthy();
  });
});
