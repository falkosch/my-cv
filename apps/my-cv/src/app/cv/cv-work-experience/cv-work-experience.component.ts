import { AnchorScrollService } from '@my-cv/anchor-scroll';
import { Component, Input } from '@angular/core';
import { CVWorkExperienceMilestone } from '@my-cv/cv-model';
import { LocationService } from '@my-cv/location';

@Component({
  selector: 'my-cv-cv-work-experience',
  templateUrl: './cv-work-experience.component.html',
  styleUrls: ['./cv-work-experience.component.scss'],
})
export class CvWorkExperienceComponent {
  @Input() workExperience: CVWorkExperienceMilestone[];

  constructor(
    private anchorScrollService: AnchorScrollService,
    private locationService: LocationService,
  ) {}

  navigate(elementIdWithoutHash: string): void {
    const hashElementId = `#${elementIdWithoutHash}`;
    this.locationService.navigateElement(hashElementId);
    this.anchorScrollService.scrollToId(hashElementId);
  }
}
