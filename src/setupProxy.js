const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://bookstore-relaxed-giraffe-fa.cfapps.us10-001.hana.ondemand.com',
            changeOrigin: true,
        })
    )
}