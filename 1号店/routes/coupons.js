const goods = require('../model/goods')
function coupons(req,res){
	var arr= []
	goods.find({"type":"优惠分类"}).then((couponslist)=>{
		// for(var i=0;i<couponslist.length;i++){
		
			
			console.log(couponslist[0].couponslist)
			// goods.find({"quantype":couponslist[0].couponslist}).then((result)=>{
			// 	if(result){
			// 		arr.push(result)
					
					
			// 	}
				
				
				
			// })
			res.render('coupons',{
				// arr:arr,
				// result:result,
				// couponslist:couponslist
			})
		//}
	})

}

module.exports = coupons