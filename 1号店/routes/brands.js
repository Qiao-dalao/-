const goods = require('../model/goods.js')
const users = require('../model/users.js')
async function brands(req,res){
	var results = await goods.find({type:'超级品牌列表'})
	var str = req.cookies
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('brands',{
				results,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('brands',{
				results,
				name
			}) 
		}
	}else{
		res.render('brands',{
			results,
			name:[{name:'注册 登录'}]
		})
	}
}


module.exports = brands
