var http = require('http');

var handler = function(petition, respond) {
  console.log('Petition received');
  respond.end('Hello world!');
};

var server = http.createServer(handler);

server.listen(8080);
