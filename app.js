var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
var app = express();
var db = require('./config/db');
var _dog = require('./model/dog');
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
			_dog.find(function (err, data) {
			  if (err){
			  	return res.end(err);
			  }; 
			  res.end(JSON.stringify(data));
			});
			break;

		case '/create':
			var dogLeo = {
				name : 'Leonardo',
				price : 50.0,
				brood : 'Bassehound',
			};

			var dogzin = new _dog(dogLeo);

			dogzin.save(function (err, data) {
			  if (err){
			  	return res.end(err);
			  }; 
			  res.end('Dog criado -> '+JSON.stringify(data));
			});
			break;

		case '/update':
			_dog.findOne(function (err, data) {
			  if (err){
			  	return res.end(err);
			  }; 

			  // data.name='caio';
			  res.end(JSON.stringify(data))

			 //  data.save(function (err, data) {
				//   if (err){
				//   	return res.end(err);
				//   }; 
				//   res.end(JSON.stringify(data));
				// });
			  
			});

			break;
		default:
			res.end('URL desconhecida! -> '+ url);
			break;
	}

}).listen(3000);

console.log('Let the magic begins at port -> 3000');