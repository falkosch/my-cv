import { TestBed } from '@angular/core/testing';

import { AppDocumentService } from './app-document.service';
import { AppModule } from './app.module';

describe('AppDocumentService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppModule],
    }),
  );

  it('should be created', () => {
    const service: AppDocumentService = TestBed.get(AppDocumentService);
    expect(service).toBeTruthy();
  });
});
