const users = require('../model/users')
function recharge(req,res){
    var str = req.cookies
    users.find(str).then((name)=>{
    	res.render('recharge',{
    		name:name
    	})
    })
}
module.exports = recharge;