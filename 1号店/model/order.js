const mongoose = require('mongoose')
var orderSchema = new mongoose.Schema({
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
	numnow:String,
	id:Number,
	userid:String,
	xiaoji:Number,
	allprice:Number,
	useridprice:String
	
});
var orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel
