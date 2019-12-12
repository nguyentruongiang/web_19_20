import { TestBed } from '@angular/core/testing';

import { ExcelProssingService } from './excel-prossing.service';

describe('ExcelProssingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelProssingService = TestBed.get(ExcelProssingService);
    expect(service).toBeTruthy();
  });
});
