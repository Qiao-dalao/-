const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
    type : String,
	img : String,
	price : Number,
	manjianquan : String,
	manduoshao : Number,
	limit : String,
	way : String
});
var mongooseModel = mongoose.model('good', mongooseSchema);
module.exports = mongooseModel


