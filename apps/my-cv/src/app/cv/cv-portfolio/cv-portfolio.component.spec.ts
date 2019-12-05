import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPortfolioComponent } from './cv-portfolio.component';

describe('CvPortfolioComponent', () => {
  let component: CvPortfolioComponent;
  let fixture: ComponentFixture<CvPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
