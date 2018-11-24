# react-module-boilerplate

[![Build Status][travis-image]][travis-url]

> Sample React components package.

## About

Showcase and document techniques and glued tools to build and maintain either
single component or UI systems packages.
Strive for keeping things simple and efficient.

## Features

JS, ESnext

- ES2018+ with `babel-preset-env`
- Ship both ESM, commonjs, UMD modules with Rollup

Styling

- CSS modules
- CSS next with `postcss-preset-env`
  - custom properties (theming)
  - Autoprefixer
- Ship two stylesheets
  - Local scoped styles
  - Global styles
- Ship individual CSS modules
  - Allows for picking just the needed ones

Unit Testing

- Jest
- Enzyme
- `jest-enzyme`
- `enzyme-to-json` (Snapshots from Enzyme)
- CI reports (tests results, coverage)
- `babel-plugin-css-modules-transform` (Test classNames)

Code Quality

- ESLint
- Flow
- `flow-coverage-report`
- Stylelint
- Prettier

Development environment, styleguide

- Storybook
- Playroom

## Credits

- [Pascal Duez](https://github.com/pascalduez)

## Licence

react-module-boilerplate is [unlicensed](http://unlicense.org/).

[travis-url]: https://travis-ci.org/pascalduez/react-module-boilerplate?branch=master
[travis-image]: http://img.shields.io/travis/pascalduez/react-module-boilerplate.svg?style=flat-square
[license-image]: http://img.shields.io/npm/l/postcss-apply.svg?style=flat-square
[license-url]: UNLICENSE
