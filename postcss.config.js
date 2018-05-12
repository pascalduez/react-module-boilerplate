/* eslint-disable global-require, no-global-assign */

require = require('esm')(module);
const variables = require('./src/theme').default;

module.exports = ({ options: { appendVariables = true } }) => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'custom-properties': {
          variables,
          appendVariables,
          preserve: true,
          warnings: true,
        },
      },
    },
    'postcss-reporter': {},
  },
});
