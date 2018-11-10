module.exports = {
  title: 'Playroom',
  outputPath: 'dist/playroom',
  components: 'dist/react-module-boilerplate.cjs.js',
  frameComponent: '.playroom/FrameComponent.js',
  widths: [320, 375, 768, 1024],
  exampleCode: `
    <Button>test</Button>
    <Button theme="secondary">test</Button>
    <Button theme="danger">test</Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
  }),
};
