import { CVSummary } from '../meta-model/cv-summary.meta-model';

export const cvSummaryFactory = (): CVSummary => ({
  skills: [
    {
      color: 'primary',
      href: 'cv.badges.1.href',
      text: 'cv.badges.1.text',
    },
    {
      alt: 'cv.badges.2.alt',
      text: 'cv.badges.2.text',
    },
  ],
  coreBeliefs: 'cv.summary.core-beliefs.text',
  careerObjectives: 'cv.summary.career-objectives.text',
});
