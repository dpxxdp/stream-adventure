var request = require('request');

var req = request.post('http://localhost:8000');
var src = process.stdin;
var dest = process.stdout;

src.pipe(req).pipe(dest);