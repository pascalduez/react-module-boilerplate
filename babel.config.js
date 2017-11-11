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
 * [ES2017+]
 * https://babeljs.io/docs/plugins/preset-env
 *
 * [Experimental]
 * https://babeljs.io/docs/plugins/transform-object-rest-spread
 * https://babeljs.io/docs/plugins/transform-class-properties
 * https://babeljs.io/docs/plugins/transform-do-expressions
 */

const presets = [
  [
    'env',
    {
      targets: {
        browsers: ['last 2 versions', '> 1%'],
        node: 'current',
      },
      modules: env.includes('cjsm') ? 'commonjs' : false,
    },
  ],
  'react',
];

const plugins = [
  'transform-object-rest-spread',
  'transform-class-properties',
  'transform-do-expressions',
];

const cssClassPattern = env.includes('cssglobal')
  ? '[name]-[local]'
  : '[name]-[local]_[hash:base64:5]';

const cssDistTarget = env.includes('cssglobal')
  ? './dist/stylesheets/global'
  : './dist/stylesheets/local';

const cssmPlugin = [
  'css-modules-transform',
  {
    generateScopedName: cssClassPattern,
    append: ['./src/theme', 'autoprefixer'],
    extractCss: {
      dir: cssDistTarget,
      relativeRoot: './src/',
      filename: '[name].css',
    },
  },
];

if (env.includes('cssm')) {
  plugins.push(cssmPlugin);
}

module.exports = {
  presets,
  plugins,
};
