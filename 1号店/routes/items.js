const goods = require('../model/goods')
function items(req,res){
	goods.find({type:'超级单品抢购'}).then((result)=>{
		res.render('items',{
			results:result
		})
	})
	
}
module.exports = items