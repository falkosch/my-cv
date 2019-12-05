import { Component, Input } from '@angular/core';

import { CVPortfolio } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv-portfolio',
  templateUrl: './cv-portfolio.component.html',
  styleUrls: ['./cv-portfolio.component.scss'],
})
export class CvPortfolioComponent {
  @Input() portfolio: CVPortfolio;
}
