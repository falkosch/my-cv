import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvWorkExperienceComponent } from './cv-work-experience.component';
import { CvWorkExperienceModule } from './cv-work-experience.module';

describe('CvWorkExperienceComponent', () => {
  let component: CvWorkExperienceComponent;
  let fixture: ComponentFixture<CvWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvWorkExperienceModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
