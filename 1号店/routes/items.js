const goods = require('../model/goods')
const users = require('../model/users.js')
async function items(req,res){
	var results = await goods.find({type:'超级单品抢购'})
	var str = req.cookies
	if(str._id !=0){
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
	}else{
		res.render('items',{
			results,
			name:[{name:'注册 登录'}]
		})
	}
}
module.exports = items