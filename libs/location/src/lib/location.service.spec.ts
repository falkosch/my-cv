import { TestBed } from '@angular/core/testing';

import { LocationModule } from './location.module';
import { LocationService } from './location.service';

describe('LocationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [LocationModule],
    }),
  );

  it('should be created', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
});
