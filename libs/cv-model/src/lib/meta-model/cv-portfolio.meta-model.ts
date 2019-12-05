export interface CVPortfolioLink {
  description: string;
  href: string;
  image?: string;
  title: string;
}

export interface CVPortfolio {
  description: string;
  links: CVPortfolioLink[];
}
