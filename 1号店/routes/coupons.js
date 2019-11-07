const goods = require('../model/goods')
const users = require('../model/users')
async function coupons(req,res){
	var data = await goods.find({"type":"优惠分类"})
	var str = req.cookies
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('coupons',{
				data,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('coupons',{
				data,
				name
			}) 
		}
	}else{
		res.render('coupons',{
			data,
			name:[{name:'注册 登录'}]
		}) 
	}
}

module.exports = coupons