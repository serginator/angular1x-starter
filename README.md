Angular 1.x starter
=================

Base project to work with Angular.js

## Specs
* Angular 1.x
* Webpack 4
* Babel
* LESS (with Autoprefixer)
* Jest
* Linters (ESLint, stylelint)

## Scripts

* `npm start` install dependencies and runs webpack-dev-server
* `npm run dev` runs webpack-dev-server
* `npm run build` generates a build in `dist/` folder
* `npm run lint` lints the code. It's used by pre-commit too
* `npm run test` launches jest
* `npm run ci` launches lint and test and generates reports under `reports/` folder
* `npm run fix-npm` cleans npm cache, removes node_modules and launch a npm install again
