import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvSectionComponent } from './cv-section.component';
import { CvSectionModule } from './cv-section.module';

describe('CvSectionComponent', () => {
  let component: CvSectionComponent;
  let fixture: ComponentFixture<CvSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvSectionModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSectionComponent);
    component = fixture.componentInstance;

    component.section = {
      componentId: 'cv-education',
      content: {},
      title: '',
      titleIcon: '',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
