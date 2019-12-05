import { CV } from '../meta-model/cv.meta-model';

import { cvProfileFactory } from './cv-profile.model';
import { cvSectionsFactory } from './cv-sections.model';

export const cvFactory = (): CV => ({
  originalOnlineVersionHref: languageCode =>
    `https://github.com/falkosch/my-cv/?l=${languageCode}`,
  printVersionHref: languageCode =>
    `assets/CurriculumVitae-${languageCode}.pdf`,
  profile: cvProfileFactory(),
  sections: cvSectionsFactory(),
});
