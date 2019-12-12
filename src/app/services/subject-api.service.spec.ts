import { TestBed } from '@angular/core/testing';

import { SubjectApiService } from './api/subject-api.service';

describe('SubjectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectApiService = TestBed.get(SubjectApiService);
    expect(service).toBeTruthy();
  });
});
