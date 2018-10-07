module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-properties': {
          importFrom: 'src/styles/variables.css',
        },
      },
    },
    'postcss-reporter': {},
  },
};
