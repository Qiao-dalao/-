const goods = require('../model/goods.js')
const users = require('../model/users.js')
function classes(req,res){
	goods.find({type:'超级品类列表'}).then(async (results)=>{
		var str = req.cookies
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('classes',{
				results,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('classes',{
				results,
				name
			}) 
		}
		
	})

}
module.exports = classes