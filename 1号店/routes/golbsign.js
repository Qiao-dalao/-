const goods = require('../model/goods')
const users = require('../model/users')

function golbsign(req,res){
	goods.find({address:"金币商城"}).then(async(result)=>{
		var str = req.cookies
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
	})
	
}
module.exports = golbsign