const goods = require('../model/goods.js')
const users = require('../model/users')
function loginShopping(req,res){
	goods.find({type:'猜你喜欢'}).then(async (results)=>{
        var str = req.cookies
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('loginShopping',{
				id:req.params.type,
				results,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('loginShopping',{
				id:req.params.type,
				results,
				name
			}) 
		}
    });  
}
module.exports = loginShopping