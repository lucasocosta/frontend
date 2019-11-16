const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' }
    }
    ,
    {
        context: '/api',
        target: 'http://cep.la',
        pathRewrite: { '^/api': '' }
      }
  ];
  module.exports = proxy;