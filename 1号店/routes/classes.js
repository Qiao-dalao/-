const goods = require('../model/goods.js')
function classes(req,res){
	goods.find({type:'超级品类列表'}).then((results)=>{
		res.render('classes',{
			results:results
		})
	})
	
}
module.exports = classes