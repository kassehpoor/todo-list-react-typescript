1)install Nodejs & npm

2)sudo npm install -g create-react-app

3)navigate to the parent directory that you would like to place the application within:
create-react-app <name-of-app> --typescript

4)navigate to the place that application within:
npm install @types/react-router-dom

5)npm start

-------------------------------------------
how to use CRA proxy:
1)in package.json file put:
"proxy": "http://localhost:5000",

2)in src folder create file setupProxy.js with this content:
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/*', { target: 'http://localhost:5000' }))
 }
