const env = process.env.NODE_ENV || '';

const config = {
  roots: [
    'src',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
    '!src/**/*.story.js',
    '!src/**/*.type.js',
    '!src/**/stories/*.js',
  ],
  setupTestFrameworkScriptFile: 'jest-enzyme',
};

if (env === 'ci') {
  Object.assign(config, {
    coverageDirectory: './reports/coverage',
    testResultsProcessor: './scripts/reports.js',
  });
}

module.exports = config;
