import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PrintHintComponent } from './print-hint.component';
import { PrintHintModule } from './../print-hint.module';

describe('PrintHintComponent', () => {
  let component: PrintHintComponent;
  let fixture: ComponentFixture<PrintHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), PrintHintModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintHintComponent);
    component = fixture.componentInstance;

    component.printVersionHref = jest.fn(lang => lang);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
