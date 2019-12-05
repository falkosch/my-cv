import { AnchorScrollModule } from '@my-cv/anchor-scroll';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocationModule } from '@my-cv/location';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvWorkExperienceComponent } from './cv-work-experience.component';

@NgModule({
  declarations: [CvWorkExperienceComponent],
  imports: [
    AnchorScrollModule,
    CommonModule,
    FlexLayoutModule,
    LocationModule,
    MatChipsModule,
    MatTooltipModule,
    MglTimelineModule,
    TranslateModule.forChild(),
  ],
  entryComponents: [CvWorkExperienceComponent],
})
export class CvWorkExperienceModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
