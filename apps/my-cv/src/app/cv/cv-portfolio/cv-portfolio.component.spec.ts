import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CvPortfolioComponent } from './cv-portfolio.component';
import { CvPortfolioModule } from './cv-portfolio.module';

describe('CvPortfolioComponent', () => {
  let component: CvPortfolioComponent;
  let fixture: ComponentFixture<CvPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CvPortfolioModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPortfolioComponent);
    component = fixture.componentInstance;

    component.portfolio = {
      description: '',
      links: [],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
