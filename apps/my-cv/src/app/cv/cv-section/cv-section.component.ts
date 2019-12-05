import { CvSectionService } from './cv-section.service';
import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { CVSection } from '@my-cv/cv-model';

@Component({
  selector: 'my-cv-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss'],
})
export class CvSectionComponent implements OnInit {
  @Input() section: CVSection;

  @ViewChild('cvSection', { read: ViewContainerRef, static: true })
  target: ViewContainerRef;

  constructor(private cvSectionService: CvSectionService) {}

  ngOnInit() {
    const componentFactory = this.cvSectionService.resolveSectionComponentFactory(
      this.section.componentId,
    );
    const componentRef = this.target.createComponent(componentFactory);

    Object.entries(this.section.content).forEach(
      ([key, value]) => (componentRef.instance[key] = value),
    );
  }
}
