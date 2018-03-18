/* eslint-disable global-require, no-global-assign */

require = require('esm')(module);
const variables = require('./src/theme').default;

module.exports = ({ options: { appendVariables = true } }) => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'css-variables': {
          variables,
          appendVariables,
          preserve: true,
          warnings: true,
        },
      },
    },
    autoprefixer: {},
    'postcss-reporter': {},
  },
});
