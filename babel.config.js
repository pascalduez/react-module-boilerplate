/**
 * `cssm`       CSS modules
 * `cssglobal`  global css classnames
 * `csslocal`   scoped css classnames (default)
 * `cjsm`       commonjs modules
 * `esm`        ES2015+ modules (default)
 */

const env = (process.env.BABEL_ENV || '').split(',');

/**
 * [CSS modules]
 * https://github.com/css-modules/css-modules
 * https://github.com/michalkvasnicak/babel-plugin-css-modules-transform
 *
 * [ES2018+]
 * https://babeljs.io/docs/plugins/preset-env
 *
 * [Experimental]
 * https://babeljs.io/docs/plugins/transform-object-rest-spread
 * https://babeljs.io/docs/plugins/transform-class-properties
 * https://babeljs.io/docs/plugins/transform-do-expressions
 *
 * [React]
 * https://babeljs.io/docs/plugins/preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/plugins/preset-flow
 */

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
      modules: env.includes('cjsm') ? 'commonjs' : false,
    },
  ],
  '@babel/react',
  '@babel/flow',
];

const plugins = [
  '@babel/proposal-object-rest-spread',
  '@babel/proposal-class-properties',
  '@babel/proposal-do-expressions',
  '@babel/transform-runtime',
];

const cssmPlugin = [
  'css-modules-transform',
  {
    generateScopedName: '[name]-[local]',
  },
];

if (env.includes('cssm')) {
  plugins.push(cssmPlugin);
}

module.exports = () => ({
  presets,
  plugins,
});
