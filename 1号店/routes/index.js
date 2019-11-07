const goods = require('../model/goods')
const users = require('../model/users')
async function index(req,res){
	var str = req.cookies
	var results = await goods.find({type:'首页超级单品'})
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('index',{
				results,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('index',{
				results,
				name
			}) 
		}
	}else{
		res.render('index',{
			results,
			name:[{name:'注册 登录'}]
		}) 
	}
	
	
}

module.exports = index
