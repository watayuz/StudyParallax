'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');

var app = express();

// 静的ファイルの提供
app.use(express.static('public'));
app.use(morgan('short'));

var PORT = 8080;

app.get('/', function(req, res, next) {
	fs.readFile('./public/index.html', 'utf-8', function(error, data) {
		if (error) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('not found!');
			return res.end();
		}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

app.listen(PORT, function() {
	console.log('server is running :' +  PORT);
});

