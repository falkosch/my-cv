import { Component, Input } from '@angular/core';
import { CVEducationMilestone } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.scss'],
})
export class CvEducationComponent {
  @Input() education: CVEducationMilestone[];
}
