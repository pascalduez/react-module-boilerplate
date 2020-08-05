/**
 * [ES2020+]
 * https://babeljs.io/docs/en/babel-preset-env
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
 *
 * [CSS modules]
 * https://github.com/css-modules/css-modules
 * https://github.com/michalkvasnicak/babel-plugin-css-modules-transform
 */

module.exports = api => {
  let env = api.env();

  let envOps = {
    targets: {
      esmodules: true,
    },
    bugfixes: true,
  };

  let runtimeOps = {
    corejs: 2,
    helpers: true,
    regenerator: true,
    useESModules: true,
    version: '7.9.0',
  };

  let presets = [
    ['@babel/preset-env', envOps],
    // ['@babel/preset-react', { runtime: 'automatic' }],
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
    plugins.push('@babel/plugin-transform-modules-commonjs', [
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
