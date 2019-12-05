import { TestBed } from '@angular/core/testing';

import { AppDocumentService } from './app-document.service';

describe('AppDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDocumentService = TestBed.get(AppDocumentService);
    expect(service).toBeTruthy();
  });
});
