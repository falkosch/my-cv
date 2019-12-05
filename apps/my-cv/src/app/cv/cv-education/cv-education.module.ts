import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvEducationComponent } from './cv-education.component';

@NgModule({
  declarations: [CvEducationComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatChipsModule,
    MatTooltipModule,
    MglTimelineModule,
    TranslateModule.forChild(),
  ],
  entryComponents: [CvEducationComponent],
})
export class CvEducationModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
