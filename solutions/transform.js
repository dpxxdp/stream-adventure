var through = require('through');

var src = process.stdin;
var dest = process.stdout;

var thr = through(function (buf) {
	this.queue(buf.toString().toUpperCase());
});

src.pipe(thr).pipe(dest);