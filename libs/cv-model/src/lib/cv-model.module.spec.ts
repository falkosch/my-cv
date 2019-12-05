import { async, TestBed } from '@angular/core/testing';
import { CvModelModule } from './cv-model.module';

describe('CvModelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CvModelModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CvModelModule).toBeDefined();
  });
});
