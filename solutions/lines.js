var through = require('through');
var split = require('split');

var lineCount = 0;

var src = process.stdin;
var dest = process.stdout;

var thr = through(function (buf) {
	if(lineCount % 2 === 0) {
		this.queue(buf.toString().toLowerCase() + '\n');
	}
	else {
		this.queue(buf.toString().toUpperCase() + '\n');
	}
	lineCount++;
});

src.pipe(split()).pipe(thr).pipe(dest);
