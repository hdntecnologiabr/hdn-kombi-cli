const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs');
const percyHealthCheck = require('@percy/cypress/task');
const _ = require('lodash');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify', { project: '../tsconfig.json' }]);

  on('file:preprocessor', cucumber(options));
  on('task', {
    getMocks(files) {
      return _.mapValues(files, getFile);
    },
  });
  on('task', percyHealthCheck);
};

function getFile(filename) {
  filename = `./mocks/${filename}.json`;
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, 'utf8');
  }

  return null;
}
