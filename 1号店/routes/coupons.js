const goods = require('../model/goods')
const users = require('../model/users')
function coupons(req,res){
	goods.find({"type":"优惠分类"}).then(async (data)=>{
		var str = req.cookies
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
	})
	
}

module.exports = coupons