import { TestBed } from '@angular/core/testing';

import { RegisterApiService } from './api/register-api.service';

describe('RegisterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterApiService = TestBed.get(RegisterApiService);
    expect(service).toBeTruthy();
  });
});
