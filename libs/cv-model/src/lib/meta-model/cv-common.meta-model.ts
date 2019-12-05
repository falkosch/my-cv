export interface CVDateSpan {
  from: string;
  to: string;
}

export interface CVBadge {
  alt?: string;
  href?: string;
  text: string;
}

export type CVColorName = 'primary' | 'accent';

export interface CVColoredBadge extends CVBadge {
  color?: CVColorName;
}
