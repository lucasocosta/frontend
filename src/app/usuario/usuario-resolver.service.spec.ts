import { TestBed } from '@angular/core/testing';

import { UsuarioResolverService } from './usuario-resolver.service';

describe('UsuarioResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioResolverService = TestBed.get(UsuarioResolverService);
    expect(service).toBeTruthy();
  });
});
