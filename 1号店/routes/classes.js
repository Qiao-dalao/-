const goods = require('../model/goods.js')
const users = require('../model/users.js')
async function classes(req,res){
	var results = await goods.find({type:'超级品类列表'})
	var str = req.cookies
	if(str._id !=0){
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
	}else{
		res.render('classes',{
			results,
			name:[{name:'注册 登录'}]
		}) 
	}
}
module.exports = classes