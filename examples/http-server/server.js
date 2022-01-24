var http = require('http');

http.createServer(function (request, response) {

    // HTTP Header
    // HTTP status: 200 : OK
    // Content: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Response "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// Console log
console.log('Server running at http://127.0.0.1:8888/');
