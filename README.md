# react-module-boilerplate

[![Build Status][travis-image]][travis-url]

> Sample React presentational components package.  

## About

Showcase and document techniques and glued tools to build and maintain either
single component or UI systems packages.
Strive for keeping things simple and efficient.


## Features

JS, ESnext
 * Babel  
 * babel-preset-env
 * Ship both commonjs and ES2015 modules

Styling
 * css-modules
 * babel-plugin-css-modules-transform (Webpack free)
 * PostCSS
    * autoprefixer
    * custom properties (theming)
 * Ship two stylesheets
    * Local scoped styles (React components)
    * Global styles (use with own markup, classical template engine)
 * Ship individual CSS modules
    * Allows for picking just the needed ones

Unit Testing
 * jest
 * enzyme
 * jest-enzyme
 * enzyme-to-json (Snapshots from Enzyme)
 * CI reports (tests results, coverage)

Code Quality
 * eslint
 * flow
 * flow-coverage-report
 * stylelint

Development environment, styleguide
 * storybook


## Credits

* [Pascal Duez](https://github.com/pascalduez)


## Licence

react-module-boilerplate is [unlicensed](http://unlicense.org/).


[travis-url]: https://travis-ci.org/pascalduez/react-module-boilerplate?branch=master
[travis-image]: http://img.shields.io/travis/pascalduez/react-module-boilerplate.svg?style=flat-square
[license-image]: http://img.shields.io/npm/l/postcss-apply.svg?style=flat-square
[license-url]: UNLICENSE
