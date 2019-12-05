import { CV } from '@my-cv/cv-model';

export interface AppLanguage {
  code: string;
  icon?: string;
  text: string;
}

export interface AppLink {
  elementId: string;
  icon?: string;
  text: string;
}

export interface AppDocument {
  languages: AppLanguage[];
  cv: CV;
  links: AppLink[];
}
