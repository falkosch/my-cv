import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvProfileComponent } from './cv-profile.component';
import { CvProfileModule } from './cv-profile.module';

describe('CvProfileComponent', () => {
  let component: CvProfileComponent;
  let fixture: ComponentFixture<CvProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvProfileModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvProfileComponent);
    component = fixture.componentInstance;

    component.profile = {
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
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
