import { CommonModule } from '@angular/common';
import { CvEducationModule } from './cv-education/cv-education.module';
import { CvHobbiesModule } from './cv-hobbies/cv-hobbies.module';
import { CvPortfolioModule } from './cv-portfolio/cv-portfolio.module';
import { CvProfileModule } from './cv-profile/cv-profile.module';
import { CvSectionModule } from './cv-section/cv-section.module';
import { CvSummaryModule } from './cv-summary/cv-summary.module';
import { CvWorkExperienceModule } from './cv-work-experience/cv-work-experience.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { PrintHintModule } from '@my-cv/print-hint';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvComponent } from './cv.component';

@NgModule({
  declarations: [CvComponent],
  imports: [
    CommonModule,
    CvEducationModule,
    CvHobbiesModule,
    CvPortfolioModule,
    CvProfileModule,
    CvSectionModule,
    CvSummaryModule,
    CvWorkExperienceModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatIconModule,
    PrintHintModule,
    TranslateModule.forChild(),
  ],
  exports: [CvComponent],
})
export class CvModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
