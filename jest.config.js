const env = process.env.NODE_ENV || '';
const pkg = require('./package.json');

const config = {
  cacheDirectory: '<rootDir>/.jest-cache',
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/index.js',
    '!**/*.story.js',
    '!**/stories/*.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

if (env === 'ci') {
  Object.assign(config, {
    cache: false,
    collectCoverage: true,
    reporters: [
      'default',
      [
        'jest-junit',
        {
          suiteName: `${pkg.name} unit tests`,
          outputDirectory: '<rootDir>/reports',
          outputName: 'junit-report.xml',
        },
      ],
      [
        'jest-html-reporter',
        {
          pageTitle: `${pkg.name} unit tests`,
          outputPath: '<rootDir>/reports/output-report.html',
        },
      ],
    ],
  });
}

module.exports = config;
