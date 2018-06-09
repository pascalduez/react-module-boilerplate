const env = process.env.NODE_ENV || '';
const pkg = require('./package.json');

const config = {
  roots: ['src'],
  cacheDirectory: '.jest-cache',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
    '!src/**/*.story.js',
    '!src/**/*.type.js',
    '!src/**/stories/*.js',
  ],
  setupFiles: ['./test/setup'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

if (env === 'ci') {
  Object.assign(config, {
    collectCoverage: true,
    coverageDirectory: './reports/coverage',
    testResultsProcessor: './test/report',
    reporters: [
      'default',
      [
        'jest-junit',
        {
          suiteName: `${pkg.name} unit tests`,
          output: './reports/junit-report.xml',
        },
      ],
    ],
  });
}

module.exports = config;
