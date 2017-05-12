const env = {
  list: (process.env.BABEL_ENV || process.env.NODE_ENV || '').split(','),
  has(feature) {
    return this.list.indexOf(feature) > -1;
  },
};

const presets = [
  ['env', {
    targets: {
      browsers: ['last 2 versions', '> 1%'],
      node: 'current',
    },
    modules: env.has('esm') ? false : 'commonjs',
  }],
  'react',
];

const plugins = [
  'transform-object-rest-spread',
  'transform-do-expressions',
];

const cssClassPattern = env.has('globalcss')
  ? '[name]-[local]'
  : '[name]-[local]_[hash:base64:5]';

const cssDistTarget = env.has('globalcss')
  ? './dist/stylesheets/global'
  : './dist/stylesheets/local';

const cssmPlugin = [
  'css-modules-transform', {
    generateScopedName: cssClassPattern,
    append: [
      './src/theme',
      'autoprefixer',
    ],
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
