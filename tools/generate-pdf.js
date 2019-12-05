const puppeteer = require('puppeteer');

const languages = ['de', 'en'];
const website = (languageCode) => `https://github.com/falkosch/my-cv/?l=${languageCode}`;

const launchOptions = {
  defaultViewport: {
    width: 1920,
    height: 1080
  },
};

const gotoOptions = {
  waitUntil: ['load', 'networkidle0']
};

const pdfOptions = (languageCode) => ({
  displayHeaderFooter: true,
  path: `../dist/apps/my-cv/assets/CurriculumVitae-${languageCode}.pdf`,
  format: 'A4',
});

const printCSS = {
  'de': {
    content: `
      /* Add css if the print version looks weird or broken due page breaks */
      my-cv-cv-work-experience > mgl-timeline > mgl-timeline-entry:nth-child(2) {
        /* margin-bottom: 32px !important; */
      }
    `,
  },
  'en': {
    content: `
      /* same but for another language code... */
      my-cv-cv-work-experience > mgl-timeline > mgl-timeline-entry:nth-child(2) {
        /* margin-bottom: 80px !important; */
      }
    `,
  }
};

async function browse(languageCode) {
  try {
    const browser = await puppeteer.launch(launchOptions);
    try {
      const page = await browser.newPage();
      await page.goto(website(languageCode), gotoOptions);
      await page.addStyleTag(printCSS[languageCode]);
      await page.pdf(pdfOptions(languageCode));
    }
    finally {
      await browser.close();
    }
  }
  catch (error) {
    console.error('Something went horribly wrong: ', error);
    process.exit(-1);
  }
};

Promise.all(
  languages.map(languageCode => browse(languageCode))
);
