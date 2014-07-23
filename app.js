var mongoose = require('mongoose');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var methodOverride = require('method-override');
var app = express();
var db = require('./app/config/db');
var api = {};

api.dog = require('./app/routes/dog');
var dbVerify = mongoose.connection;

dbVerify.once('open',function(){
	console.log('Conexão aberta!');
}).on('error',function(){
	console.log('Erro na conexão!');
});

mongoose.connect(db.url);

app.use(express.static(path.join(__dirname, 'public')));
// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method'));          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override'));      // IBM
app.use(logger('dev'));      // IBM

app.use('/api/dog',api.dog);

app.listen(3000);

// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8;'});

// 	var url = req.url;

// 	switch(url){
// 		case '/retrieve':
// 			dogs.retrieve(req,res);
// 			break;

// 		case '/create':
// 			dogs.create(req,res);
// 			break;

// 		case '/update':
// 			dogs.update(req,res);
// 			break;

// 		case '/remove':
// 			dogs.remove(req,res);
// 			break;
			
// 		case '/removeOne':
// 			dogs.removeOne(req,res);
// 			break;
// 		default:
// 			res.end('URL desconhecida! -> '+ url);
// 			break;
// 	}

// }).listen(3000);

console.log('Let the magic begins at port -> 3000');