import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvSectionModule } from './cv-section.module';
import { CvSectionService } from './cv-section.service';

describe('CvSectionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvSectionModule],
    }),
  );

  it('should be created', () => {
    const service: CvSectionService = TestBed.get(CvSectionService);
    expect(service).toBeTruthy();
  });
});
