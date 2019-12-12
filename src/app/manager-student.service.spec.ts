import { TestBed } from '@angular/core/testing';

import { ManagerStudentService } from './manager-student.service';

describe('ManagerStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerStudentService = TestBed.get(ManagerStudentService);
    expect(service).toBeTruthy();
  });
});
