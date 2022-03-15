const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: '<%= orgName %>',
    projectName: '<%= mfeName %>',
    webpackConfigEnv,
    argv,
  });

  // any shared-dependencie should be added to this array
  const sharedDependencies = ['customer-portal-shared-services'];

  const config = {
    // when using the standalone mode we need any shared dependencie to not be an external, because there is no importmap in the standalone mode
    externals: webpackConfigEnv.standalone ? undefined : sharedDependencies,
    // customize your webpack config here, it will be merged with the single-spa-defaults
  };

  return merge(defaultConfig, config);
};
