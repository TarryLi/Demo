// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://10.241.241.72:4567/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
};
