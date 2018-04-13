import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const external = id =>
  id in pkg.peerDependencies || id.startsWith('@babel/runtime');

const plugins = [
  resolve(),
  postcss({
    modules: true,
    extract: true,
  }),
  babel({
    exclude: ['node_modules/**'],
    runtimeHelpers: true,
  }),
  sizeSnapshot(),
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'react-module-boilerplate',
    },
    plugins: [...plugins, commonjs()],
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    external,
    plugins,
  },
];
