/* global jasmine */
/* eslint-disable global-require */

require('jest-enzyme');

const ci = require('ci-info');

if (ci.JENKINS) {
  const path = require('path');
  const reporters = require('jasmine-reporters');

  const reporter = new reporters.JUnitXmlReporter({
    // consolidateAll: false,
    filePrefix: 'report',
    savePath: path.resolve(__dirname, '..'),
  });

  jasmine.getEnv().addReporter(reporter);
}
