/* eslint-disable global-require */

const theme = require('./src/theme');

module.exports = ({ options }) => ({
  plugins: {
    'postcss-preset-env': {
      features: {
        'css-variables': {
          variables: theme,
          preserve: true,
          appendVariables: options.appendVariables,
        },
      },
    },
    autoprefixer: {},
  },
});
