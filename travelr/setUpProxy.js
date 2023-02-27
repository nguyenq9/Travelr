const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.user(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:1337',
            changeOrigin: true,
        })
    )
}