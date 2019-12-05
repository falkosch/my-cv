import { TestBed } from '@angular/core/testing';

import { CvSectionService } from './cv-section.service';

describe('CvSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvSectionService = TestBed.get(CvSectionService);
    expect(service).toBeTruthy();
  });
});
