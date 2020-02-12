import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvComponent } from './cv.component';
import { CvModule } from './cv.module';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;

    component.cv = {
      originalOnlineVersionHref: jest.fn(lang => lang),
      printVersionHref: jest.fn(lang => lang),
      profile: {
        birthdate: '',
        links: [],
        location: '',
        mail: 'x',
        name: {
          first: 'x',
          last: 'x',
        },
        pictures: [],
        pictureIndex: 0,
        roles: [],
      },
      sections: [],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
