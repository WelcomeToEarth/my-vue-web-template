const hot = { target: 'https://hotspot.xinhua-news.cn' };
module.exports = {
  publicPath: './',
  devServer: {
    // allowedHosts: ['.xinhua-news.cn'],
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/v1': hot,
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