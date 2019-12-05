import { Component, Input } from '@angular/core';
import { CVColoredBadge } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv-hobbies',
  templateUrl: './cv-hobbies.component.html',
  styleUrls: ['./cv-hobbies.component.scss'],
})
export class CvHobbiesComponent {
  @Input() hobbies: CVColoredBadge[];
}
