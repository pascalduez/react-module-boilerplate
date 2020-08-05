import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import externals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import flowEntry from 'rollup-plugin-flow-entry';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

let plugins = [
  externals(),
  postcss({
    modules: true,
    extract: `${pkg.name}.css`,
  }),
  babel({
    exclude: ['node_modules/**'],
    babelHelpers: 'runtime',
  }),
  resolve(),
  commonjs(),
  sizeSnapshot(),
];

export default {
  plugins,
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      name: pkg.name,
      format: 'umd',
    },
    {
      file: pkg.main,
      format: 'cjs',
      plugins: [flowEntry()],
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
};
