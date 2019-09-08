const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/*', { target: 'http://localhost:5000' }))
    // app.use(proxy('/auth', { target: 'http://localhost:5000' }))
    // app.use(proxy('/read', { target: 'http://localhost:5000' }))
    // app.use(proxy('/write', { target: 'http://localhost:5000' }))
    // app.use(proxy('/register', { target: 'http://localhost:5000' }))
}