import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvWorkExperienceComponent } from './cv-work-experience.component';

describe('CvWorkExperienceComponent', () => {
  let component: CvWorkExperienceComponent;
  let fixture: ComponentFixture<CvWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvWorkExperienceComponent ]
    })
    .compileComponents();
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
