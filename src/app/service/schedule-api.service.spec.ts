import { TestBed } from '@angular/core/testing';

import { ScheduleApiService } from '../services/api/schedule-api.service';

describe('ScheduleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleApiService = TestBed.get(ScheduleApiService);
    expect(service).toBeTruthy();
  });
});
