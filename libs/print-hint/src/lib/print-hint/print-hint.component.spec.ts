import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintHintComponent } from './print-hint.component';

describe('PrintHintComponent', () => {
  let component: PrintHintComponent;
  let fixture: ComponentFixture<PrintHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrintHintComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
