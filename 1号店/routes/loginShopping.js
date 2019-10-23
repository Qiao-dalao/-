const goods = require('../model/goods.js')
const users = require('../model/users')
function loginShopping(req,res){
	var str = req.cookies
	users.find(str).then((name)=>{
		res.render('loginShopping',{
			name:name
		})
	})
}
module.exports = loginShopping