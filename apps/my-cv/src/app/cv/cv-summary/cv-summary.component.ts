import { Component, Input } from '@angular/core';
import { CVSummary } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.scss'],
})
export class CvSummaryComponent {
  @Input() summary: CVSummary;
}
