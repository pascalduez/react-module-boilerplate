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
    modules: features.has('cjs') ? 'commonjs' : false,
  }],
  'react',
];

const plugins = [
  'transform-object-rest-spread',
  'transform-do-expressions',
];

const cssmPlugin = [
  'css-modules-transform', {
    generateScopedName: '[name]-[local]_[hash:base64:5]',
    append: [
      './src/theme',
      'autoprefixer',
    ],
    extractCss: {
      dir: './dist/stylesheets/local',
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
