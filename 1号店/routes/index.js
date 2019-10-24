const goods = require('../model/goods')
const users = require('../model/users')
function index(req,res){
	var str = req.cookies
    goods.find({type:'首页超级单品'}).then(async (results)=>{
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
	 
    });
}

module.exports = index
