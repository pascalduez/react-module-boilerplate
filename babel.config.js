/**
 * `cssm`       CSS modules
 * `cssglobal`  global css classnames
 * `csslocal`   scoped css classnames (default)
 * `cjsm`       commonjs modules
 * `esm`        ES2015+ modules (default)
 *
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
 *
 */

const env = {
  list: (process.env.BABEL_ENV || '').split(','),
  has(feature) {
    return this.list.indexOf(feature) > -1;
  },
};

const presets = [
  [
    'env',
    {
      targets: {
        browsers: ['last 2 versions', '> 1%'],
        node: 'current',
      },
      modules: env.has('cjsm') ? 'commonjs' : false,
    },
  ],
  'react',
];

const plugins = [
  'transform-object-rest-spread',
  'transform-class-properties',
  'transform-do-expressions',
];

const cssClassPattern = env.has('cssglobal')
  ? '[name]-[local]'
  : '[name]-[local]_[hash:base64:5]';

const cssDistTarget = env.has('cssglobal')
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

if (env.has('cssm')) {
  plugins.push(cssmPlugin);
}

module.exports = {
  presets,
  plugins,
};
