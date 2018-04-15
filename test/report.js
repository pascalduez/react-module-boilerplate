/* eslint-disable */

const pkg = require('../package.json');

const title = `${pkg.name} unit tests`;

process.env.JEST_SUITE_NAME = title;
process.env.JEST_JUNIT_OUTPUT = './reports/junit-report.xml';

process.env.JEST_HTML_REPORTER_PAGE_TITLE = title;
process.env.JEST_HTML_REPORTER_OUTPUT_PATH = './reports/output-report.html';

module.exports = function(result) {
  require('jest-junit')(result);
  require('jest-html-reporter')(result);

  return result;
};
