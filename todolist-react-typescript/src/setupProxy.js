const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    // app.use(proxy('/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/auth', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/read', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/write', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/register', { target: 'http://localhost:5000' }))
}