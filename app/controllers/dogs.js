var Dog = require('../model/dog'); 

module.exports = {
	create : function(req,res){
		var dogzin = new Dog(req.body);

		dogzin.save(function (err, data) {
		  if (err){
		  	return res.end(err);
		  }; 
		  res.json(data);
		});
	},

	retrieve : function(req,res){
		Dog.find(function (err, data) {
			if (err){
				return res.end(err);
			}; 
			res.json(data);
		});
	},

	update : function(req,res){
		var query = {"_id" : req.params.id};

		var mod = req.body;

		Dog.update(query,mod,function (err, data) {
		  if (err){
		  	return res.end(err);
		  }; 
		  res.json(data);
		});
	},

	remove : function(req,res){
		Dog.remove(function (err, data) {
			if (err){
				return res.end(err);
			}; 
			res.json(data);
		});
	},

	removeOne : function(req,res){
		var mod = req.params.body;
		Dog.find(mod).remove(function(err,data){
			res.json(data);
		}).exec();
	}
};
