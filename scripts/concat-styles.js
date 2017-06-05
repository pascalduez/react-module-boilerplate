#!/usr/bin/env node

/* eslint-disable spaced-comment, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const multistream = require('multistream');
const str2str = require('string-to-stream');

const stylesDir = path.join(__dirname, '..', 'dist', 'stylesheets');
const theme = require(path.join(__dirname, '..', 'src', 'theme', 'theme'));
const variablesFile = 'variables.css';

/**
 * Create a valid CSS rule set from JS object.
 */
function variables()/*: string */ {
  const root = postcss.root({ raws: { after: '\n' } });
  const rule = postcss.rule({ selector: ':root' });

  Object.keys(theme).forEach((key) => {
    const prop = /^--/.test(key) ? key : `--${key}`;
    const value = theme[key];

    rule.append(postcss.decl({ prop, value }));
  });

  return root.append(rule).toString();
}

/**
 * Read and stream CSS files from given directory.
 * Sort the variables file to be always on top.
 */
function streams(dir/*: string */)/*: Array<stream$Readable> */ {
  return fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.css')
    .reduce((acc, file) => {
      if (file === variablesFile) {
        return [file, ...acc];
      }
      return [...acc, file];
    }, [])
    .map(file => path.join(dir, file))
    .map(file => fs.createReadStream(file));
}

/**
 * Write one variables file per directory.
 * So that we keep the ability to granularly compose a stylesheet.
 */
function print(target/*: string */)/*: string */ {
  str2str(
    variables()
  )
  .pipe(
    fs.createWriteStream(path.join(stylesDir, target, variablesFile))
  );

  return target;
}

/**
 * Concat all modules styles into one stylesheet.
 */
function concat(target/*: string */)/*: void */ {
  multistream(
    streams(path.join(stylesDir, target))
  )
  .pipe(
    fs.createWriteStream(path.join(stylesDir, `${target}.css`))
  );
}

['local', 'global'].map(print).map(concat);
