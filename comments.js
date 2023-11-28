// Create web server

// 1. Load http module
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2. Create http server
http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    // 3. Specify response headers
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // 4. Send response body
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}).listen(8080); // 5. Set listen port

// Console will print the message
console.log('Server running at http://