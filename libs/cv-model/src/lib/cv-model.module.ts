import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvService } from './cv.service';

@NgModule({
  imports: [TranslateModule],
  providers: [
    {
      provide: CvService,
      useClass: CvService,
    },
  ],
})
export class CvModelModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./model/lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
