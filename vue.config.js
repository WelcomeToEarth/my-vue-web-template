const mock = { target: 'http://mock-api.com/oKmAOAKX.mock' };
module.exports = {
  publicPath: './',
  devServer: {
    // allowedHosts: ['.xinhua-news.cn'],
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/': mock,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import \'~@/styles/theme.scss\';',
      },
    },
  },
  productionSourceMap: false,
};