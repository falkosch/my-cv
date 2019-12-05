import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalOnlinePrintHintComponent } from './original-online-print-hint.component';

describe('OriginalOnlinePrintHintComponent', () => {
  let component: OriginalOnlinePrintHintComponent;
  let fixture: ComponentFixture<OriginalOnlinePrintHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalOnlinePrintHintComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalOnlinePrintHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
