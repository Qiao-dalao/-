const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
	type:String,
	img:String,
	miaoshu:String,
	price:Number,
	golb:Number,
	oldprice:Number,
	couponslist:String,
	list:Object,
	address:String,
	username:String,
	describe1:String,
	describe2:String,
	num:Number,
	numnow:String
	
});
var mongooseModel = mongoose.model('good', mongooseSchema);
module.exports = mongooseModel
