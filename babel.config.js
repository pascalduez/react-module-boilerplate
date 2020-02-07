/**
 * [ES2020+]
 * https://babeljs.io/docs/en/babel-preset-env
 * https://github.com/babel/preset-modules
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 * https://babeljs.io/docs/en/babel-plugin-proposal-decorators
 *
 * [React]
 * https://babeljs.io/docs/en/babel-preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/en/babel-preset-flow
 *
 * [Other]
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 */

module.exports = api => {
  let env = api.env();

  let runtimeOps = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    useESModules: true,
    version: '7.8.0',
  };

  let presets = [
    '@babel/preset-modules',
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [
    ['@babel/plugin-transform-runtime', runtimeOps],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-do-expressions',
  ];

  if (env === 'test') {
    runtimeOps.useESModules = false;
    plugins.push('@babel/plugin-transform-modules-commonjs');
  }

  return {
    presets,
    plugins,
  };
};
