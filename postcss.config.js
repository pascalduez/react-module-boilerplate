/* eslint-disable global-require, no-global-assign */

require = require('esm')(module);
const variables = require('./src/theme').default;

module.exports = ({ options }) => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'css-variables': {
          variables,
          preserve: true,
          appendVariables: options.appendVariables,
        },
      },
    },
    autoprefixer: {},
  },
});
