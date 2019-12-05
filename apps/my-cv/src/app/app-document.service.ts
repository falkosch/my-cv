import { CvService } from '@my-cv/cv-model';
import { Injectable } from '@angular/core';

import { AppDocument } from './model/app-document.meta-model';
import { appDocumentFactory } from './model/app-document.model';

@Injectable()
export class AppDocumentService {
  private appDocument: AppDocument = appDocumentFactory(() =>
    this.cvService.model(),
  );

  constructor(private cvService: CvService) {}

  model(): AppDocument {
    return this.appDocument;
  }
}
