const goods = require('../model/goods')
function coupons(req,res){
	goods.find({"type":"优惠分类"}).then((couponslist)=>{
		for(var i=0;i<coupons.length;i++){
			goods.find({"quantype":couponslist[i].couponslist}).then((result)=>{
				res.render('coupons',{
					i:i,
					result:result,
					couponslist:couponslist
				})
			})
		}
	})
}

module.exports = coupons