var jsonApi = require('jsonapi-server');
var fs = require('fs');
var path = require('path');

jsonApi.setConfig({
  protocol: 'http',
  hostname: 'localhost',
  port: 4000,
  graphiql: false,

});

var resources = '/resources';
fs.readdirSync(path.join(__dirname, resources))
  .filter(function(filename) {
    return /^[a-z].*\.js$/.test(filename);
  })
  .map(function(filename) {
    return path.join(__dirname, resources + '/', filename);
  })
  .forEach(require);

const app = jsonApi.getExpressServer();
app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-Control-Allow-Credentials', 'true');
  return next();
});
jsonApi.start();
