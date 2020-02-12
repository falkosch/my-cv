import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { OriginalOnlinePrintHintComponent } from './original-online-print-hint.component';
import { PrintHintModule } from './../print-hint.module';

describe('OriginalOnlinePrintHintComponent', () => {
  let component: OriginalOnlinePrintHintComponent;
  let fixture: ComponentFixture<OriginalOnlinePrintHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), PrintHintModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalOnlinePrintHintComponent);
    component = fixture.componentInstance;

    component.originalOnlineVersionHref = jest.fn(lang => lang);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
