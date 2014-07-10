var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
var app = express();
var db = require('./config/db');
var dbVerify = mongoose.connection;

mongoose.connect(db.url);

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8;'});

	res.end();
}).listen(3000);