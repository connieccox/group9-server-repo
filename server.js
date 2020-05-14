const http = require('http');
const app = require('./app');
const moment = require('moment');

const port = process.env.port || 8080;

const server = http.createServer(app);

var datetime = moment().format();

server.listen(port);
console.log("SERVER STARTED @:" + datetime + " listening on PORT: " + port);

require("cf-deployment-tracker-client").track();
