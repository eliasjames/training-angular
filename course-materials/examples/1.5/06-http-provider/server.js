'use strict';

// Importing express module for our node middleware
var express = require('express');
var serveIndex = require('serve-index')
var fs = require('fs');

// ------------------------------------------------------------------
// Configurable variables section...
// ------------------------------------------------------------------
// Web server port
// If 8080 doesn't work try 9080
var BASE_PORT = 8080;
var counter = 0;

// Compute the working directory for serving static files
// makes assumptions about layout of node and directory structure
// working directories/projects etd.
var ROOT_DIR = __dirname + '/';
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
	console.log('Error: cannot find working directory: ' + ROOT_DIR);
	exit();
}

/**
 * Create the "express" server for routing and static files.
 **/
var app = express();

app.get('/counter', function (req, rsp, next) {
  rsp.send(JSON.stringify({ctr: counter}));  
});

app.post('/counter', function (req, rsp, next) {
  counter++;  
});

/**
 * Adds a simple logging, "mounted" on the root path.
 * Using Express middleware
 **/
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.use(express.static(ROOT_DIR));

app.use('/', serveIndex(ROOT_DIR, {'icons': true}));

app.listen(BASE_PORT, function() {
	console.log('Node server started @ http://localhost:' + BASE_PORT);
	console.log('Serving static files from ' + ROOT_DIR);
	console.log('Press Ctrl + c for server termination');
});
