import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSummaryComponent } from './cv-summary.component';

describe('CvSummaryComponent', () => {
  let component: CvSummaryComponent;
  let fixture: ComponentFixture<CvSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
