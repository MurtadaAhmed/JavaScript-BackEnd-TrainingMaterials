const http = require('http');
const messageBroker = require('./messageBroker');
require('./reportingService');
require('./logger');
const server = http.createServer((req, res) => {
    messageBroker.publish('request', `URL: ${req.url} Method: ${req.method}`);
    res.end;
});

server.listen(5000)
console.log("Server is listening on port 5000....")