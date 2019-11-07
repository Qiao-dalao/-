const mongoose = require('mongoose')
var finorderSchema = new mongoose.Schema({
	type:String,
	img:String,
	miaoshu:String,
	price:Number,
	num:Number,
	id:Number,
	userid:String,
	xiaoji:Number,
	allprice:Number,
    useridprice:String,
    paytime:String
	
});
var finorderModel = mongoose.model('finorder', finorderSchema);
module.exports = finorderModel
