const goods = require('../model/goods.js')
const users = require('../model/users')
function notloginShopping(req,res){
    goods.find({type:'猜你喜欢'}).then((result)=>{
        var str = req.cookies
        users.find(str).then((name)=>{
			res.render('notloginShopping',{
			    results:result,
				name:name
			})
		})
		
    });     
}
module.exports = notloginShopping