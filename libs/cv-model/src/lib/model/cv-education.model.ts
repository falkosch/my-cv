import { CVEducationMilestone } from '../meta-model/cv-education.meta-model';

export const cvEducationFactory = (): CVEducationMilestone[] => [
  {
    title: 'cv.education.master.title',
    courses: [
      {
        color: 'primary',
        text: 'cv.badges.1.text',
      },
      {
        alt: 'cv.badges.2.alt',
        text: 'cv.badges.2.text',
      },
    ],
    date: {
      from: 'cv.education.master.date.from',
      to: 'cv.education.master.date.to',
    },
    faculty: {
      href: 'cv.faculty.university-master.href',
      name: 'cv.faculty.university-master.name',
    },
    focusTopics: [
      'cv.badges.1.text',
      'cv.badges.2.text',
    ],
    thesis: {
      title: 'cv.education.master.thesis.title',
      abstract: 'cv.education.master.thesis.description',
      skills: [
        {
          color: 'primary',
          text: 'cv.badges.1.text',
        },
        {
          alt: 'cv.badges.2.alt',
          text: 'cv.badges.2.text',
        },
      ],
    },
  },
  {
    title: 'cv.education.bachelor.title',
    courses: [
      {
        color: 'primary',
        text: 'cv.badges.1.text',
      },
      {
        alt: 'cv.badges.2.alt',
        text: 'cv.badges.2.text',
      },
    ],
    date: {
      from: 'cv.education.bachelor.date.from',
      to: 'cv.education.bachelor.date.to',
    },
    faculty: {
      href: 'cv.faculty.university-bachelor.href',
      name: 'cv.faculty.university-bachelor.name',
    },
    focusTopics: ['cv.badges.1.text'],
    thesis: {
      title: 'cv.education.bachelor.thesis.title',
      abstract: 'cv.education.bachelor.thesis.description',
      skills: [
        {
          color: 'primary',
          text: 'cv.badges.1.text',
        },
        {
          alt: 'cv.badges.2.alt',
          text: 'cv.badges.2.text',
        },
      ],
    },
  },
];
