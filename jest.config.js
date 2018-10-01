const env = process.env.NODE_ENV || '';
const pkg = require('./package.json');

const config = {
  roots: ['src'],
  cacheDirectory: '.jest-cache',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
    '!src/**/*.story.js',
    '!src/**/stories/*.js',
  ],
  setupFiles: ['./test/setup'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testURL: 'http://localhost',
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
