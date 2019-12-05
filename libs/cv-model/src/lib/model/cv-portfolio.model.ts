import { CVPortfolio } from '../meta-model/cv-portfolio.meta-model';

export const cvPortfolioFactory = (): CVPortfolio => ({
  description: 'cv.portfolio.description',
  links: [
    {
      title: 'cv.portfolio.links.my-cv.title',
      description: 'cv.portfolio.links.my-cv.description',
      href: 'cv.portfolio.links.my-cv.href',
    },
  ],
});
