import {
  Injectable,
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';

import { CvPortfolioComponent } from '../cv-portfolio/cv-portfolio.component';
import { CvHobbiesComponent } from '../cv-hobbies/cv-hobbies.component';
import { CvEducationComponent } from '../cv-education/cv-education.component';
import { CvWorkExperienceComponent } from '../cv-work-experience/cv-work-experience.component';
import { CvSummaryComponent } from '../cv-summary/cv-summary.component';

const sectionComponents = {
  'cv-summary': CvSummaryComponent,
  'cv-work-experience': CvWorkExperienceComponent,
  'cv-education': CvEducationComponent,
  'cv-hobbies': CvHobbiesComponent,
  'cv-portfolio': CvPortfolioComponent,
};

@Injectable()
export class CvSectionService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  resolveSectionComponentFactory<T>(
    sectionComponentId: string,
  ): ComponentFactory<T> {
    const componentType = sectionComponents[sectionComponentId];
    return this.componentFactoryResolver.resolveComponentFactory<T>(
      componentType,
    );
  }
}
