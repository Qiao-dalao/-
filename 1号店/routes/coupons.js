const goods = require('../model/goods')
const users = require('../model/users')
function coupons(req,res){
	goods.find({"type":"优惠分类"}).then(async (data)=>{
		var str = req.cookies
		var name = await users.find({'_id':str._id})
			res.render('coupons',{
				data:data,
				name:name
			})
	
		
	})
	
}

module.exports = coupons