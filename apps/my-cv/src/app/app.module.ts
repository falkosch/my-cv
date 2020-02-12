import { AnchorScrollModule } from '@my-cv/anchor-scroll';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvModelModule } from '@my-cv/cv-model';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LocationModule, LocationService } from '@my-cv/location';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppDocumentService } from './app-document.service';
import { CvModule } from './cv/cv.module';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.error('XXX MISSING XXX', params);
    return 'XXXXXXXXXXXXXXXXXXXXX';
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AnchorScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    CvModule,
    CvModelModule,
    FlexLayoutModule,
    HttpClientModule,
    LocationModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      useDefaultLang: true,
    }),
  ],
  providers: [AppDocumentService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    domSanitizer: DomSanitizer,
    locationService: LocationService,
    matIconRegistry: MatIconRegistry,
    private translate: TranslateService,
  ) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'),
    );

    const supportedLanguages = ['de', 'en'];
    const languageFromSearch = locationService.getParam('l');
    const bestLanguage = supportedLanguages.includes(languageFromSearch)
      ? languageFromSearch
      : supportedLanguages[0];

    translate.setDefaultLang('int');
    translate.use(bestLanguage);

    ['int', ...supportedLanguages].forEach(code => {
      this.translate.setTranslation(code, require(`./lang/${code}.json`), true);
      this.translate.setTranslation(
        code,
        require(`./model/lang/${code}.json`),
        true,
      );
    });
  }
}
