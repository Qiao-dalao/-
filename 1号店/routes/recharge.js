const users = require('../model/users')
async function recharge(req,res){
    var str = req.cookies
    var name = await users.find({'_id':str._id})
    	res.render('recharge',{
    		name:name
    	})
    
}
module.exports = recharge;