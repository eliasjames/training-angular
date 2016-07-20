var express = require('express');
var app = express();
var ctr = 0;

app.get('/counter', function (req, resp) {
  resp.json({ counter: ctr++ });
});

app.listen('8888');
