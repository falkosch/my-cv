import { CommonModule } from '@angular/common';
import { CvEducationModule } from '../cv-education/cv-education.module';
import { CvHobbiesModule } from '../cv-hobbies/cv-hobbies.module';
import { CvPortfolioModule } from '../cv-portfolio/cv-portfolio.module';
import { CvSummaryModule } from '../cv-summary/cv-summary.module';
import { CvWorkExperienceModule } from '../cv-work-experience/cv-work-experience.module';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvSectionComponent } from './cv-section.component';
import { CvSectionService } from './cv-section.service';

@NgModule({
  declarations: [CvSectionComponent],
  imports: [
    CommonModule,
    CvEducationModule,
    CvHobbiesModule,
    CvPortfolioModule,
    CvSummaryModule,
    CvWorkExperienceModule,
    TranslateModule.forChild(),
  ],
  providers: [
    {
      provide: CvSectionService,
      useClass: CvSectionService,
    },
  ],
  exports: [CvSectionComponent],
})
export class CvSectionModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
