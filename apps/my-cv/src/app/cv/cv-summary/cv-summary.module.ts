import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvSummaryComponent } from './cv-summary.component';

@NgModule({
  declarations: [CvSummaryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule.forChild(),
  ],
  entryComponents: [CvSummaryComponent],
})
export class CvSummaryModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
