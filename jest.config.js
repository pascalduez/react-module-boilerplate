const env = process.env.NODE_ENV || '';
const pkg = require('./package.json');

const config = {
  cacheDirectory: '.jest-cache',
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/index.js',
    '!**/*.story.js',
    '!**/stories/*.js',
  ],
  setupFiles: ['./test/setup'],
  setupFilesAfterEnv: ['jest-enzyme'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

if (env === 'ci') {
  Object.assign(config, {
    collectCoverage: true,
    coverageDirectory: './reports/coverage',
    reporters: [
      'default',
      [
        'jest-junit',
        {
          suiteName: `${pkg.name} unit tests`,
          output: './reports/junit-report.xml',
        },
      ],
      [
        'jest-html-reporter',
        {
          pageTitle: `${pkg.name} unit tests`,
          outputPath: './reports/output-report.html',
        },
      ],
    ],
  });
}

module.exports = config;
