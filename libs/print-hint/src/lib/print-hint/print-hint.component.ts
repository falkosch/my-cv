import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-cv-print-hint',
  templateUrl: './print-hint.component.html',
  styleUrls: ['./print-hint.component.scss'],
})
export class PrintHintComponent implements OnInit {
  @Input() printVersionHref: (languageCode: string) => string;

  printHref = '';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.printHref = this.printVersionHref(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe(event => {
      this.printHref = this.printVersionHref(event.lang);
    });
  }
}
