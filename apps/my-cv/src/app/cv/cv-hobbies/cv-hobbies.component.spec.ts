import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvHobbiesComponent } from './cv-hobbies.component';
import { CvHobbiesModule } from './cv-hobbies.module';

describe('CvHobbiesComponent', () => {
  let component: CvHobbiesComponent;
  let fixture: ComponentFixture<CvHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvHobbiesModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
