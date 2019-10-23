const goods = require('../model/goods.js')
function brands(req,res){
	goods.find({type:'超级品牌列表'}).then((results)=>{
		res.render('brands',{
			results:results
		})
	})
}


module.exports = brands
