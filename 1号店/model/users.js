const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
	username:String,
	password:String
});
var mongooseModel = mongoose.model('user', mongooseSchema);
module.exports = mongooseModel


