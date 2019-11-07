const goods = require('../model/goods.js')
const users = require('../model/users')
const shopcar = require('../model/shopcar')
const order = require('../model/order')
async function loginShopping(req,res){
	var msg
	var str = req.cookies
	if(str._id !=0){
		var a = await order.find({"userid":str._id})
		var allprice = await order.find({"useridprice":str._id,"type":"allprice"})
		for(var i=0;i<a.length;i++){
			order.remove(a[i],(err,data)=>{
				console.log(data)
			})
		}
		for(var i=0;i<allprice.length;i++){
			order.remove(allprice[i],(err,data)=>{
				console.log(data)
			})
		}
		var results = await goods.find({type:'猜你喜欢'})
		console.log(str._id)
		if(req.params.id){
			var goodxinxi = await goods.findOne({"id":req.params.id})	//在商品表中找到该商品
			var panduanshopcar = await shopcar.find({"userid":str._id,"id":req.params.id})	//在购物车的库中找该商品
			if(panduanshopcar.length==0){
				shopcar.create({
					"img":goodxinxi.img,
					"miaoshu":goodxinxi.miaoshu,
					"price":goodxinxi.price,
					"num":goodxinxi.num,
					"id":goodxinxi.id,
					"userid":str._id,
					"xiaoji":goodxinxi.price
				})
			}else{
				
			}
		}
		var shopcargood = await shopcar.find({"userid":str._id})
		if(shopcargood.length==0){
			msg=0
		}else{
			msg=1
		}
		var name = await users.find({'_id':str._id})
		if(name.length==0 ){
			res.render('loginShopping',{
				id:req.params.type,
				results,
				name:[{name:'注册 登录'}],
				msg,
				shopcargood
			}) 
		}else{
			res.render('loginShopping',{
				id:req.params.type,
				results,
				name,
				msg,
				shopcargood
			}) 
		}
	}
	
		
	
	
}
module.exports = loginShopping