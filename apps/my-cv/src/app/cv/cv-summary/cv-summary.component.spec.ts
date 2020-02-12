import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvSummaryComponent } from './cv-summary.component';
import { CvSummaryModule } from './cv-summary.module';

describe('CvSummaryComponent', () => {
  let component: CvSummaryComponent;
  let fixture: ComponentFixture<CvSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvSummaryModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSummaryComponent);
    component = fixture.componentInstance;

    component.summary = {
      skills: [],
      coreBeliefs: '',
      careerObjectives: '',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
