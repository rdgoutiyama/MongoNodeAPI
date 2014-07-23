var Dog = require('../model/dog'); 

module.exports = {

	create : function(req,res){
		var dogLeo = {
			name : 'Leonardo',
			price : 50.0,
			brood : 'Bassehound',
		};

		var dogzin = new Dog(dogLeo);

		dogzin.save(function (err, data) {
		  if (err){
		  	return res.end(err);
		  }; 
		  res.end('Dog criado -> '+JSON.stringify(data));
		});
	},

	retrieve : function(req,res){
		Dog.find(function (err, data) {
			if (err){
				return res.end(err);
			}; 
			res.end(JSON.stringify(data));
		});
	},

	update : function(req,res){
		var query = {"_id":"53becf473083c11c25b7c129"};

		var mod = {'name' : 'Lingui'};

		Dog.update(query,mod,function (err, data) {
		  if (err){
		  	return res.end(err);
		  }; 
		  res.end('Dog alterado -> '+JSON.stringify(data));
		});
	},

	remove : function(req,res){
		Dog.remove(function (err, data) {
			if (err){
				return res.end(err);
			}; 
			res.end('Dogs removidos -> '+JSON.stringify(data));
		});
	},

	removeOne : function(req,res){
		Dog.find({'name':'Lingui'}).remove(function(err,data){
			res.end('Dog removido -> '+JSON.stringify(data));
		}).exec();
	}
};