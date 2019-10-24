const goods = require('../model/goods')
const users = require('../model/users.js')
function items(req,res){
	goods.find({type:'超级单品抢购'}).then(async (results)=>{
		var str = req.cookies
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('items',{
				results,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('items',{
				results,
				name
			}) 
		}
		
	})
	
}
module.exports = items