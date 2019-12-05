import { Component, Input } from '@angular/core';
import { CV } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  @Input() cv: CV;
}
