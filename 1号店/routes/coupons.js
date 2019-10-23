const goods = require('../model/goods')
const users = require('../model/users')
function coupons(req,res){
	goods.find({"type":"优惠分类"}).then((data)=>{
		var str = req.cookies
		users.find(str).then((name)=>{
			res.render('coupons',{
				data:data,
				name:name
			})
		})
		
	})
	
}

module.exports = coupons