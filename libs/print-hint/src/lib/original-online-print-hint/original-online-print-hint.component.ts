import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-cv-original-online-print-hint',
  templateUrl: './original-online-print-hint.component.html',
  styleUrls: ['./original-online-print-hint.component.scss'],
})
export class OriginalOnlinePrintHintComponent implements OnInit {
  @Input() originalOnlineVersionHref: (languageCode: string) => string;

  onlineHref = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.onlineHref = this.originalOnlineVersionHref(
      this.translateService.currentLang,
    );
    this.translateService.onLangChange.subscribe(event => {
      this.onlineHref = this.originalOnlineVersionHref(event.lang);
    });
  }
}
