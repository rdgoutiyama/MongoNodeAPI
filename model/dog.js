var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DogSchema = new Schema({
	name 	: {type : String, required: 'Nome do DOG requerido!'},
	price 	: {type : Number, required: 'Preço do DOG requerido!'},
	brood 	: {type : String, required: 'Raça do DOG requerido!'}
});

module.exports = mongoose.model('Dog',DogSchema);