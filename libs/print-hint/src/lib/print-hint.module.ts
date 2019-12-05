import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PrintHintComponent } from './print-hint/print-hint.component';
import { OriginalOnlinePrintHintComponent } from './original-online-print-hint/original-online-print-hint.component';

@NgModule({
  declarations: [PrintHintComponent, OriginalOnlinePrintHintComponent],
  imports: [FlexLayoutModule, MatCardModule, MatIconModule, TranslateModule],
  exports: [PrintHintComponent, OriginalOnlinePrintHintComponent],
})
export class PrintHintModule {
  constructor(translate: TranslateService) {
    ['de', 'en'].forEach(code => {
      const translation = require(`./lang/${code}.json`);
      translate.setTranslation(code, translation, true);
    });
  }
}
