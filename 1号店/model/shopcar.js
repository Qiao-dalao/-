const mongoose = require('mongoose')
var shopSchema = new mongoose.Schema({
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
	xiaoji:Number
	
});
var shopModel = mongoose.model('shopcar', shopSchema);
module.exports = shopModel
