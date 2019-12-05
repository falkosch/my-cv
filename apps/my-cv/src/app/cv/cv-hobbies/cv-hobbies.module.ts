import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvHobbiesComponent } from './cv-hobbies.component';

@NgModule({
  declarations: [CvHobbiesComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatTooltipModule,
    TranslateModule.forChild(),
  ],
  entryComponents: [CvHobbiesComponent],
})
export class CvHobbiesModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
