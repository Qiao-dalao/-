const goods = require('../model/goods')
function coupons(req,res){

	var arr= []
	goods.find({"type":"优惠分类"}).then((data)=>{
		for(var i=0;i<data.length;i++){
			goods.find({"quantype":data[i].couponslist}).then((quantype)=>{
				arr.push(quantype)
				
				res.render('coupons',{
					data : data,
					result:arr
				})
			})
		}
		
		
	})
	console.log(arr[0][0].price,'--------------------------')
}

module.exports = coupons