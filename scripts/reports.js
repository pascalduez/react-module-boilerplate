/* eslint-disable */

// process.env.JEST_SUITE_NAME = 'react-module-boilerplate unit tests';
// process.env.JEST_JUNIT_OUTPUT = './reports/junit-report.xml';

module.exports = function (result) {
  require('jest-junit')(result);
  require('jest-html-reporter')(result);
}
