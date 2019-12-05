import { CVProfile } from './cv-profile.meta-model';
import { CVSection } from './cv-sections.meta-model';

export interface CV {
  originalOnlineVersionHref: (languageCode: string) => string;
  printVersionHref: (languageCode: string) => string;
  profile: CVProfile;
  sections: CVSection[];
}
