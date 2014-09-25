var http = require('http');
var through = require('through');

var port = Number(process.argv[2]);

var server = http.createServer( function(request, response) {
	if(request.method === 'POST') {
		request.pipe(through( function(buf) {
			this.queue(buf.toString().toUpperCase());
		})).pipe(response);
	}
	else {
		response.end('POST methods only\n');
	}
});


server.listen(port);