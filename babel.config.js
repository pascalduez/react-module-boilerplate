/**
 * [CSS modules]
 * https://github.com/css-modules/css-modules
 * https://github.com/michalkvasnicak/babel-plugin-css-modules-transform
 *
 * [ES2018+]
 * https://babeljs.io/docs/plugins/preset-env
 *
 * [Experimental]
 * https://babeljs.io/docs/plugins/transform-object-rest-spread
 * https://babeljs.io/docs/plugins/transform-class-properties
 * https://babeljs.io/docs/plugins/transform-do-expressions
 *
 * [React]
 * https://babeljs.io/docs/plugins/preset-react
 *
 * [Flow]
 * https://babeljs.io/docs/plugins/preset-flow
 */

module.exports = api => {
  const env = api.env();

  let envOpts = {};

  switch (env) {
    case 'production':
      envOpts = {
        modules: false,
        targets: {
          node: 8,
        },
      };
      break;
    case 'test':
      envOpts = {
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
      };
      break;
    default:
      envOpts = {
        modules: false,
        targets: {
          node: 'current',
        },
      };
  }

  const presets = [['@babel/env', envOpts], '@babel/react', '@babel/flow'];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-do-expressions',
    '@babel/transform-runtime',
  ];

  const cssmPlugin = [
    'css-modules-transform',
    {
      generateScopedName: '[name]-[local]',
    },
  ];

  if (env === 'test') {
    plugins.push(cssmPlugin);
  }

  return {
    presets,
    plugins,
  };
};
