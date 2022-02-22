const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'micro-test';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'micro-root',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
    resolve: {
      modules: ['node_modules'],
      alias: {
        NodeM: path.resolve(__dirname, './node_modules'),
      },
    },
  });
};
