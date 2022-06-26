const webpack = require("webpack");
const path = require("path");
const { version } = require("./package");

module.exports = {
  styleguideDir: "docs",
  ribbon: {
    url: "https://github.com/zxccvvv/",
    text: "Fork Me",
  },
  usageMode: "expand",
  require: ["@babel/polyfill"],
  // components: "src/**/[A-Z]*.js",
  components: "src/**/*.js",
  ignore: ["src/index.js"],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".js");
    return `import { ${name} } from 'FlixComponent';`;
  },
  moduleAliases: {
    FlixComponent: path.resolve(__dirname, "src"),
  },
  version,
  webpackConfig: {
    resolve: {
      // auto resolves any react-native import as react-native-web
      alias: { "react-native": "react-native-web" },
      extensions: [".web.js", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: [/node_modules/],
          options: {
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
              "react-native-web",
            ],
            presets: [
              "@babel/preset-env",
              "module:metro-react-native-babel-preset",
            ],
            babelrc: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                hash: "sha512",
                digest: "hex",
                name: "[hash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          loader: "file-loader",
        },
      ],
    },
    // Most react native projects will need some extra plugin configuration.
    plugins: [
      // Add __DEV__ flag to browser example.
      new webpack.DefinePlugin({
        __DEV__: process.env,
      }),
    ],
  },
};
