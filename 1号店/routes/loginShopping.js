const goods = require('../model/goods.js')
const users = require('../model/users')
function loginShopping(req,res){
	goods.find({type:'猜你喜欢'}).then((result)=>{
        var str = req.cookies
        users.find(str).then((name)=>{
			res.render('loginShopping',{
			    results:result,
				name:name
			})
		})
		
    });  
}
module.exports = loginShopping