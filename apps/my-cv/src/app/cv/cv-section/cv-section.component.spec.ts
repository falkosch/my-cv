import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSectionComponent } from './cv-section.component';

describe('CvSectionComponent', () => {
  let component: CvSectionComponent;
  let fixture: ComponentFixture<CvSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
