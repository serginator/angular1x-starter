# Angular 1.x starter

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b78e5d92d0dd443fb313ed72f413947a)](https://app.codacy.com/app/serginator/angular1x-starter?utm_source=github.com&utm_medium=referral&utm_content=serginator/angular1x-starter&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/serginator/angular1x-starter.svg?branch=master)](https://travis-ci.org/serginator/angular1x-starter)

Base project to work with Angular.js

## Specs
*   Angular 1.x
*   Webpack 4
*   Babel
*   LESS (with Autoprefixer)
*   Jest
*   Linters (ESLint, stylelint)

## Scripts
*   `npm start` install dependencies and runs webpack-dev-server
*   `npm run dev` runs webpack-dev-server
*   `npm run build` generates a build in `dist/` folder
*   `npm run lint` lints the code (`.js`, `.less` and `.md`). It is used by pre-commit too
*   `npm run test` launches jest
*   `npm run ci` launches lint and test and generates reports under `reports/` folder
*   `npm run fix-npm` cleans npm cache, removes node_modules and launch a npm install again
