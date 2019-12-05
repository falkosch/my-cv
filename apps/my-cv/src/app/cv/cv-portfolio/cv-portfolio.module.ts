import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvPortfolioComponent } from './cv-portfolio.component';

@NgModule({
  declarations: [CvPortfolioComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    TranslateModule.forChild(),
  ],
  entryComponents: [CvPortfolioComponent],
})
export class CvPortfolioModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
