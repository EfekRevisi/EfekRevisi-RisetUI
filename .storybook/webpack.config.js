const path = require('path')

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: ['vue-style-loader', 'css-loader', 'sass-loader']
  })

  defaultConfig.resolve = {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../assets'),
      components: path.resolve(__dirname, '../src/components'),
      helper: path.resolve(__dirname, '../src/helper'),
      mixins: path.resolve(__dirname, '../src/mixins'),
      pages: path.resolve(__dirname, '../src/pages'),
      router: path.resolve(__dirname, '../src/router'),
      static: path.resolve(__dirname, '../static'),
      store: path.resolve(__dirname, '../src/store')
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
  };

  return defaultConfig
}
