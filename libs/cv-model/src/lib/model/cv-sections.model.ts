import { CVSection } from '../meta-model/cv-sections.meta-model';

import { cvSummaryFactory } from './cv-summary.model';
import { cvHobbiesFactory } from './cv-hobbies.model';
import { cvPortfolioFactory } from './cv-portfolio.model';
import { cvWorkExperienceFactory } from './cv-work-experience.model';
import { cvEducationFactory } from './cv-education.model';

export const cvSectionsFactory = (): CVSection[] => [
  {
    componentId: 'cv-summary',
    content: {
      summary: cvSummaryFactory(),
    },
    navigationId: 'summary',
    title: 'cv.sections.summary.title',
    titleIcon: 'subject',
  },
  {
    componentId: 'cv-work-experience',
    content: {
      workExperience: cvWorkExperienceFactory(),
    },
    navigationId: 'work-experience',
    title: 'cv.sections.work-experience.title',
    titleIcon: 'work',
  },
  {
    componentId: 'cv-education',
    content: {
      education: cvEducationFactory(),
    },
    navigationId: 'education',
    title: 'cv.sections.education.title',
    titleIcon: 'school',
  },
  {
    componentId: 'cv-hobbies',
    content: {
      hobbies: cvHobbiesFactory(),
    },
    title: 'cv.sections.hobbies.title',
    titleIcon: 'photo_camera',
  },
  {
    componentId: 'cv-portfolio',
    content: {
      portfolio: cvPortfolioFactory(),
    },
    excludeInPrint: true,
    title: 'cv.sections.portfolio.title',
    titleIcon: 'code',
  },
];
