import { CVColoredBadge, CVDateSpan } from './cv-common.meta-model';

export interface CVFaculty {
  href: string;
  name: string;
}

export interface CVThesis {
  title: string;
  abstract: string;
  skills: CVColoredBadge[];
}

export interface CVEducationMilestone {
  title: string;
  courses: CVColoredBadge[];
  date: CVDateSpan;
  faculty: CVFaculty;
  focusTopics: string[];
  thesis: CVThesis;
}
