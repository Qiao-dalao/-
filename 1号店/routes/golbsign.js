const goods = require('../model/goods')
const users = require('../model/users')

async function golbsign(req,res){
	var result = await goods.find({address:"金币商城"})
	var str = req.cookies
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('golbsign',{
				id:req.params.type,
				result,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('golbsign',{
				id:req.params.type,
				result,
				name
			}) 
		}	
	}else{
		res.render('golbsign',{
			id:req.params.type,
			result,
			name:[{name:'注册 登录'}]
		}) 
	}
}
module.exports = golbsign