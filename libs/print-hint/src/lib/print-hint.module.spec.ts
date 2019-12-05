import { async, TestBed } from '@angular/core/testing';
import { PrintHintModule } from './print-hint.module';

describe('PrintHintModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrintHintModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PrintHintModule).toBeDefined();
  });
});
