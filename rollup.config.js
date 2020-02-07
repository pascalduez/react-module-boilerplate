import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import resolve from 'rollup-plugin-node-resolve';
import flowEntry from 'rollup-plugin-flow-entry';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import css from '@modular-css/rollup';
import pkg from './package.json';
import { namer } from './utils/namer';

let plugins = [
  peerDepsExternal(),
  css({
    namer,
  }),
  // postcss(),
  babel({
    exclude: ['node_modules/**'],
    runtimeHelpers: true,
  }),
  resolve(),
  commonjs(),
  sizeSnapshot(),
];

let assetFileNames = `${pkg.name}.css`;

export default {
  plugins,
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      name: pkg.name,
      format: 'umd',
      assetFileNames,
    },
    {
      file: pkg.main,
      format: 'cjs',
      plugins: [flowEntry()],
      assetFileNames,
    },
    {
      file: pkg.module,
      format: 'esm',
      assetFileNames,
    },
  ],
};
