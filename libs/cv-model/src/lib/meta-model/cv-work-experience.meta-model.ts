import { CVDateSpan, CVColoredBadge } from './cv-common.meta-model';

export interface CVCompanyGroup {
  href?: string;
  name: string;
}

export interface CVCompany {
  address: string;
  groups: CVCompanyGroup[];
}

export interface CVDateSpanWithSpentMonths extends CVDateSpan {
  spentMonths: string;
}

export interface CVWorkExperienceSkills {
  id: string;
  hintText?: string;
  items: CVColoredBadge[];
}

export interface CVProjectTitle {
  refersOtherProjectQuery: () => CVProject | undefined;
  text: string;
}

export interface CVProject {
  id: string;
  date?: CVDateSpan;
  href?: string;
  titles: CVProjectTitle[];
  description: string;
}

export interface CVWorkExperienceMilestone {
  title: string;
  company: CVCompany;
  date: CVDateSpanWithSpentMonths;
  introduction?: string;
  projects: CVProject[];
  refersOtherSkillsQuery: () => CVWorkExperienceSkills | undefined;
  skills?: CVWorkExperienceSkills;
}
