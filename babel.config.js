/**
 * [ES2018+]
 * https://babeljs.io/docs/en/babel-preset-env
 *
 * [Proposals]
 * https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
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
 *
 * [CSS modules]
 * https://github.com/css-modules/css-modules
 * https://github.com/michalkvasnicak/babel-plugin-css-modules-transform
 */

module.exports = api => {
  let env = api.env();

  let envOpts = {
    modules: false,
  };

  let runtimeOps = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    useESModules: true,
  };

  let presets = [
    ['@babel/preset-env', envOpts],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  let plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-do-expressions',
    ['@babel/plugin-transform-runtime', runtimeOps],
  ];

  if (env === 'test') {
    envOpts.modules = 'commonjs';
    runtimeOps.useESModules = false;
    plugins.push([
      'babel-plugin-css-modules-transform',
      {
        generateScopedName: '[name]-[local]',
      },
    ]);
  }

  return {
    presets,
    plugins,
  };
};
