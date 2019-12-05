import { AnchorScrollService } from '@my-cv/anchor-scroll';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '@my-cv/location';
import { TranslateService } from '@ngx-translate/core';

import { AppDocument } from './model/app-document.meta-model';
import { AppDocumentService } from './app-document.service';

@Component({
  selector: 'my-cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appDocument: AppDocument;

  constructor(
    private anchorScrollService: AnchorScrollService,
    private appDocumentService: AppDocumentService,
    private locationService: LocationService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.appDocument = this.appDocumentService.model();

    this.anchorScrollService.contentContainer = document.querySelector(
      '.fixed-container',
    );
  }

  navigate(elementIdWithHash: string) {
    this.locationService.navigateElement(elementIdWithHash);
    this.anchorScrollService.scrollToId(elementIdWithHash);
  }

  changeLanguage(code: string) {
    this.locationService.navigateParam('l', code);
    return this.translate.use(code);
  }
}
