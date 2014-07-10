var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
var app = express();
var db = require('./config/db');
var dogs = require('./controllers/dogs');
var dbVerify = mongoose.connection;

dbVerify.once('open',function(){
	console.log('Conexão aberta!');
}).on('error',function(){
	console.log('Erro na conexão!');
});

mongoose.connect(db.url);

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8;'});

	var url = req.url;

	switch(url){
		case '/retrieve':
			dogs.retrieve(req,res);
			break;

		case '/create':
			dogs.create(req,res);
			break;

		case '/update':
			dogs.update(req,res);
			break;

		case '/remove':
			dogs.remove(req,res);
			break;
			
		case '/removeOne':
			dogs.removeOne(req,res);
			break;
		default:
			res.end('URL desconhecida! -> '+ url);
			break;
	}

}).listen(3000);

console.log('Let the magic begins at port -> 3000');