import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvModelModule } from './cv-model.module';
import { CvService } from './cv.service';

describe('CvService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvModelModule],
    }),
  );

  it('should be created', () => {
    const service: CvService = TestBed.get(CvService);
    expect(service).toBeTruthy();
  });
});
