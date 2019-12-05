import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CvProfileComponent } from './cv-profile.component';

@NgModule({
  declarations: [CvProfileComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    TranslateModule.forChild(),
  ],
  exports: [CvProfileComponent],
})
export class CvProfileModule {
  constructor(translate: TranslateService) {
    ['int', 'de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
