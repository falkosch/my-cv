import { async, TestBed } from '@angular/core/testing';
import { AnchorScrollModule } from './anchor-scroll.module';

describe('AnchorScrollModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnchorScrollModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnchorScrollModule).toBeDefined();
  });
});
