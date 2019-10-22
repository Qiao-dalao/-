const goods = require('../model/goods')
function coupons(req,res){
	goods.find({"type":"优惠券"}).then((result)=>{
		if(result){
			console.log(result)
			res.render('coupons',{
				result:result
			})
		}else{
			console.log('获取失败')
		}
	})
}

module.exports = coupons