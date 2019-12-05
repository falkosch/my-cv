import { AppLink, AppDocument } from './app-document.meta-model';
import { CV, CVSection } from '@my-cv/cv-model';

function getAppLinksFrom(cvSections: CVSection[]): AppLink[] {
  return cvSections
    .filter(section => !!section.navigationId)
    .map(
      (section): AppLink => ({
        elementId: `#${section.navigationId}`,
        text: section.title,
        icon: section.titleIcon,
      }),
    );
}

export const appDocumentFactory = (cvFactory: () => CV): AppDocument => {
  const cv = cvFactory();
  return {
    languages: [
      {
        code: 'de',
        icon: 'de',
        text: 'app.document.languages.de',
      },
      {
        code: 'en',
        icon: 'gb',
        text: 'app.document.languages.en',
      },
    ],
    cv,
    links: [
      {
        elementId: '#profile',
        text: 'app.document.links.profile',
      },
      ...getAppLinksFrom(cv.sections),
    ],
  };
};
