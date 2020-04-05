module.exports = {
  stories: ['../src/**/*.stories.js'],

  addons: ['@storybook/addon-docs', '@storybook/addon-a11y/register'],

  webpackFinal: config => {
    config.module.rules = config.module.rules.filter(
      rule => rule.test.toString() !== '/\\.css$/'
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]-[local]_[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    });

    return config;
  },
};
