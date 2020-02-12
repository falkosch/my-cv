import { TestBed } from '@angular/core/testing';

import { AnchorScrollModule } from './anchor-scroll.module';
import { AnchorScrollService } from './anchor-scroll.service';

describe('AnchorScrollService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AnchorScrollModule],
    }),
  );

  it('should be created', () => {
    const service: AnchorScrollService = TestBed.get(AnchorScrollService);
    expect(service).toBeTruthy();
  });
});
