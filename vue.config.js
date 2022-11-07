const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: "kaz's PortfolioSite",
    }
  },
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
}
