const env = process.env.BABEL_ENV || process.env.NODE_ENV || '';

const features = {
  list: env.split(','),
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
    modules: features.has('esm') ? false : 'commonjs',
  }],
  'react',
];

const plugins = [
  'transform-object-rest-spread',
  'transform-do-expressions',
];

const cssClassPattern = features.has('globalcss')
  ? '[name]-[local]'
  : '[name]-[local]_[hash:base64:5]';

const cssDistTarget = features.has('globalcss')
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

if (features.has('cssm')) {
  plugins.push(cssmPlugin);
}


module.exports = {
  presets,
  plugins,
};
