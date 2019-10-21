const goods = require('../model/goods')
function coupons(req,res){
	goods.find({"type":"优惠分类"}).then((data)=>{
		res.render('coupons',{
			data:data
		})
	})
	
}

module.exports = coupons