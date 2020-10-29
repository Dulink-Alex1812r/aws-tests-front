const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
      config.plugin('extract-css')
          .use(MiniCssExtractPlugin, [{
              filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
              allChunks: true,
          }])

  },
};