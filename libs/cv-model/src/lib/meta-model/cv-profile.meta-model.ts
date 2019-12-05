export interface CVName {
  first: string;
  last: string;
}

export interface CVProfileLink {
  href: string;
  icon: string;
  text: string;
}

export interface CVProfile {
  birthdate: string;
  links: CVProfileLink[];
  location: string;
  mail: string;
  name: CVName;
  pictures: string[];
  pictureIndex: number;
  roles: string[];
}
