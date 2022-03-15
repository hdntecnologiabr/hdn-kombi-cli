const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = '<%= orgName %>';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    entry: path.resolve(process.cwd(), `src/index.js`),
  });
};
