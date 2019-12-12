import { TestBed } from '@angular/core/testing';

import { UserSubjectApiService } from './api/user-subject-api.service';

describe('UserSubjectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSubjectApiService = TestBed.get(UserSubjectApiService);
    expect(service).toBeTruthy();
  });
});
