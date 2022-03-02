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

  // return {
  //   entry: {
  //     common: './src/common-deps.js',
  //   },
  //   output: {
  //     filename: 'common-deps.js',
  //     path: path.resolve(__dirname, './dist/[name].js'),
  //     // libraryTarget: 'umd',
  //   },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       // inject: false,
  //       inject: true,
  //       template: 'src/index.ejs',
  //       templateParameters: {
  //         isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
  //         orgName,
  //       },
  //     }),
  //   ],
  //   resolve: {
  //     modules: ['node_modules'],
  //     alias: {
  //       NodeM: path.resolve(__dirname, './node_modules'),
  //     },
  //   },
  // };

  // console.log(defaultConfig);

  return merge(
    {},
    // defaultConfig,
    {
      // mode: 'development',
      entry: {
        common: './src/common-deps.js',
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        // path: '',
        // libraryTarget: 'var',
        // library: {
        //   name: '[name]',
        //   type: 'var',
        // },
      },
      plugins: [
        new HtmlWebpackPlugin({
          // inject: false,
          inject: true,
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
    },
  );
};
