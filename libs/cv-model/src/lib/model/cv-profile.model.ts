import { CVProfile } from '../meta-model/cv-profile.meta-model';

export const cvProfileFactory = (): CVProfile => ({
  birthdate: 'cv.profile.birthdate',
  links: [
    {
      href: 'cv.profile.links.github.href',
      icon: 'github-box',
      text: 'cv.profile.links.github.text',
    },
  ],
  location: 'cv.profile.location',
  mail: 'cv.profile.mail',
  name: {
    first: 'cv.profile.name.first',
    last: 'cv.profile.name.last',
  },
  pictures: ['assets/profile-1.jpg'],
  pictureIndex: 0,
  roles: ['cv.profile.roles.software-engineer'],
});
