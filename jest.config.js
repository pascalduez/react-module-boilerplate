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
  setupTestFrameworkScriptFile: './test/setup',
};

if (env === 'ci') {
  Object.assign(config, {
    coverageDirectory: './reports/coverage',
    testResultsProcessor: './test/report',
  });
}

module.exports = config;
