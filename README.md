# Starter project for static site using Eleventy

This is a startup project based on [Eleventy](https://www.11ty.io), a great and simple Static Site Generator.

The configuration of this work environment includes:

- A scaffold to start building quickly with Eleventy.
- Webpack configuration for development and production environments.
- Preprocessing SASS files to CSS.
- Babel for compiler modern Javascript.
- Nunjuck configuration as template engine.
- Compile from Vue Single File Components.
- CSS and Javascript minified bundles.
- Asset management and optimization.
- Configuration file for publish in Netlify.



### Install

```
$ npm i
```

### Development Mode

```
$ npm run dev
```

Development mode runs a local web server with hot-reloading function at http: // localhost: 8080

### Production Mode

The production mode generates precompiled templates, optimized CSS styles and javascript files building the website ready for publication in the ```/dist``` folder.

```
$ npm run build
```

---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Changed (2019-10-05)
- README.md review translation and Changelog.
- Delete `typescript` in `package.json` kewords.
- Add `babel` and `ES6` in `packege.json` keywords.


## [0.1.0] - 2019-10-05

### Fixed
- Absolute path for main.css & main.js in default layout

### Added
- Babel configuration (webpack).
- Created a `site.js` in `/_data` width `process.env.ELEVENTY_ENV` variable
- Added a `pixel.png` in `/images`.
- Added a `read.me` in `/css/partials`.
- Created a `/js/modules` folder.

### Changed
- Eleventy BrowserSyncConfig (watch: true).
- Example for load the Test Vue Single File Component.
- README.md review translation and Changelog.

### Removed
- TypeScript configuration (webpack, typings, tsconfig.json).

## [0.0.1] - 2019-08-23

### Added
- README.md including Project Changelog.