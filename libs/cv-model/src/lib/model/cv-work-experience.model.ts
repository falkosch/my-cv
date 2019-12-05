import { CVWorkExperienceMilestone } from '../meta-model/cv-work-experience.meta-model';

const milestone1: CVWorkExperienceMilestone = {
  title: 'cv.work-experience.1.title',
  company: {
    address: 'cv.work-experience.1.address',
    groups: [
      {
        href: 'cv.work-experience.1.company.1.href',
        name: 'cv.work-experience.1.company.1.name',
      },
      {
        name: 'cv.work-experience.1.company.2.name',
      },
    ],
  },
  date: {
    from: 'cv.work-experience.1.date.from',
    spentMonths: 'cv.work-experience.1.date.spent-months',
    to: 'cv.work-experience.1.date.to',
  },
  projects: [
    {
      id: 'm1p1',
      href: 'cv.work-experience.1.projects.1.href',
      titles: [
        {
          refersOtherProjectQuery: () => undefined,
          text: 'cv.work-experience.1.projects.1.title',
        },
      ],
      description: 'cv.work-experience.1.projects.1.description',
    },
    {
      id: 'm1p2',
      date: {
        from: 'cv.work-experience.1.projects.2.date.from',
        to: 'cv.work-experience.1.projects.2.date.to',
      },
      href: 'cv.work-experience.1.projects.2.href',
      titles: [
        {
          refersOtherProjectQuery: () => undefined,
          text: 'cv.work-experience.1.projects.2.title',
        },
      ],
      description: 'cv.work-experience.1.projects.2.description',
    },
  ],
  refersOtherSkillsQuery: () => undefined,
  skills: {
    id: 'm1-skills',
    hintText: 'cv.work-experience.1.skills.hint',
    items: [
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
};

const milestone2: CVWorkExperienceMilestone = {
  title: 'cv.work-experience.2.title',
  company: {
    address: 'cv.work-experience.2.address',
    groups: [
      {
        href: 'cv.work-experience.2.company.1.href',
        name: 'cv.work-experience.2.company.1.name',
      },
    ],
  },
  date: {
    from: 'cv.work-experience.2.date.from',
    to: 'cv.work-experience.2.date.to',
    spentMonths: 'cv.work-experience.2.date.spent-months',
  },
  introduction: 'cv.work-experience.2.introduction',
  projects: [
    {
      id: 'm2p1',
      titles: [
        {
          refersOtherProjectQuery: () =>
            milestone1.projects.find(p => p.id === 'm1p1'),
          text: 'cv.work-experience.2.projects.1.titles.1',
        },
        {
          refersOtherProjectQuery: () =>
            milestone1.projects.find(p => p.id === 'm1p2'),
          text: 'cv.work-experience.2.projects.1.titles.2',
        },
      ],
      description: 'cv.work-experience.2.projects.1.description',
    },
  ],
  refersOtherSkillsQuery: () => milestone1.skills,
};

const milestone3: CVWorkExperienceMilestone = {
  title: 'cv.work-experience.3.title',
  company: {
    address: 'cv.work-experience.3.address',
    groups: [
      {
        href: 'cv.faculty.university-master.href',
        name: 'cv.faculty.university-master.name',
      },
      {
        href: 'cv.work-experience.3.company.href',
        name: 'cv.work-experience.3.company.name',
      },
    ],
  },
  date: {
    from: 'cv.work-experience.3.date.from',
    spentMonths: 'cv.work-experience.3.date.spent-months',
    to: 'cv.work-experience.3.date.to',
  },
  introduction: 'cv.work-experience.3.introduction',
  projects: [
    {
      id: 'm3p1',
      date: {
        from: 'cv.work-experience.3.projects.1.date.from',
        to: 'cv.work-experience.3.projects.1.date.to',
      },
      href: 'cv.work-experience.3.projects.1.href',
      titles: [
        {
          refersOtherProjectQuery: () => undefined,
          text: 'cv.work-experience.3.projects.1.titles.1',
        },
        {
          refersOtherProjectQuery: () => undefined,
          text: 'cv.work-experience.3.projects.1.titles.2',
        },
      ],
      description: 'cv.work-experience.3.projects.1.description',
    },
    {
      id: 'm3p2',
      date: {
        from: 'cv.work-experience.3.projects.2.date.from',
        to: 'cv.work-experience.3.projects.2.date.to',
      },
      href: 'cv.work-experience.3.projects.2.href',
      titles: [
        {
          refersOtherProjectQuery: () => undefined,
          text: 'cv.work-experience.3.projects.2.title',
        },
      ],
      description: 'cv.work-experience.3.projects.2.description',
    },
  ],
  refersOtherSkillsQuery: () => undefined,
  skills: {
    id: 'm3-skills',
    items: [
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
};

export const cvWorkExperienceFactory = (): CVWorkExperienceMilestone[] => [
  milestone1,
  milestone2,
  milestone3,
];
