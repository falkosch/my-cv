# my-cv

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=my-cv&metric=alert_status)](https://sonarcloud.io/dashboard?id=my-cv)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=my-cv&metric=coverage)](https://sonarcloud.io/dashboard?id=my-cv)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=my-cv&metric=ncloc)](https://sonarcloud.io/dashboard?id=my-cv)

`my-cv` is an Angular 8 app that helps you create a CV by providing you with a default layout. You can reuse the layout but will have to add your CV data by yourself. The layout data is separated from the CV data, so that you can focus on the providing the qualitative CV content.

[I hosted the the pre-filled / still empty CV on my private hosting platform](https://my-cv.iterative-prototyping.com), so that you can have a peek of what the CV website would basically look like. If you want to have your own CV website, you will need to find an own hosting platform.

## Setup

1. `npm i` at the root.
2. `npm start` at the root to start the app in dev-server mode locally, as it is usual for any other NRWL/ng app as well.

## Structure of the App

The app has a basic layout (from top to bottom):

- A sticky navigation header (in `apps/src/app/app.component.ts`)

- Personal profile on top (`apps/src/app/cv/cv-profile`)

- An accordion of different collapsible sections (`apps/src/app/cv/cv-sections`)

  - Summary section (`apps/src/app/cv/cv-summary`)

  - Work experience timeline section (`apps/src/app/cv/cv-work-experience`)

  - Education timeline section (`apps/src/app/cv/cv-education`)

  - Hobbies section (`apps/src/app/cv/cv-hobbies`)

  - Portfolio section (`apps/src/app/cv/cv-portfolio`)

The components of the layout do not contain the actual CV information. The app is model-driven, i.e. you will find a dedicated library package in `libs/cv-model/` that contains the meta-model of the CV and all CV information that you will need to fill out.

### Fill out the CV

The `libs/cv-model/` is likewise structured as the app itself. For each part of the app you will find a meta-model in `libs/cv-model/src/lib/meta-model/` and the actual model data for the CV (that you will need to fill out) in `libs/cv-model/src/lib/model/`.

The UI of the app is multilingual or internationalized. See `apps/my-cv/src/app/model/app-document.model.ts` for configuring what languages you want to have supported. The translation files in `libs/cv-model/src/lib/model/lang/` need the actual texts that you want to have in your CV. Fill the CV model with the keys, which point to the actual texts in the translation files. Internationalization support is provided by the [ngx-translate](https://github.com/ngx-translate/core) library.

- Personal profile is contained in `libs/cv-model/src/lib/model/cv-profile.model.ts`

- Contextual description of the sections of the accordion, e.g. icon and title of the section and what component renders the section's content (`.../cv-sections.model.ts`)

  - Summary section (`.../cv-summary.model.ts`)

  - Work experience timeline section (`.../cv-work-experience.model.ts`)

  - Education timeline section (`.../cv-education.model.ts`)

  - Hobbies section (`.../cv-hobbies.model.ts`)

  - Portfolio section (`.../cv-portfolio.model.ts`)

The navigation links in the header are generated from the sections described in the CV model, see `.../cv-sections.model.ts` and `apps/my-cv/src/app/model/app-document.model.ts`.

### Deploying the CV

I've used Jenkins for building and deploying the app. Have a look at the `Jenkinsfile` at the root. Feel free to use any other CI system.

### Extending the CV

As said before, the app is model-driven. Do not add texts or information in the app's components. The app is purely for the structure of the layout.

If you want to change the styling or the layout spacings, alignment or whatever doesn't break the structure, have a look at `apps/my-cv/src/styles.scss` and `apps/my-cv/src/theme.scss`.

If you want to add or change the structure of the layout, I would recommend to add to or change the meta-model first. You will then have to change the model data as a next step to let the data conform to the meta-model again. As a last step, you can change the layout according to what you have added to the meta-model. This approach forces you of course to first thing about the data you want to have added to your CV.

Alternatively (but not recommended) you can of course work not with the model-driven approach first and adapt the meta-model and the model data after you have made changes to the layout.

### Generating the Print Version automatically

In `tools/generate-pdf.js` you will find a basic script that uses puppeteer to render the app from a deployment target (constant `website` on line 4). You can configure the deployment target to even be a `http://localhost:xxxx` site, which could be hosted e.g. by the NRWL/ng dev-server. The rendering is done for each configured language (constant `languages` on line 3).

The provided Jenkinsfile first builds a bundle of the app, then deploys the bundle to the host location, then calls the script to generate the print version, and finally deploys the generated PDF files. The online version of the app determines URLs to the deployed PDFs from the data provided in `libs/cv-model/src/lib/model/cv.model.ts`. The print version will have links to the online versions as well. The components in library `libs/print-hint/` are responsible for rendering the links.

[Puppeteer](https://github.com/puppeteer/puppeteer) is a headless chromium package that enables E2E tests and the like.

## NRWL/NX

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

### Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@my-cv/mylib`.

### Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
