module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: 'src/styles/variables.css',
      // exportTo: 'dist/config.css',
    },
    'postcss-reporter': {},
  },
};
