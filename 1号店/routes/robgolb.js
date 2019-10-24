const users = require('../model/users')
async function robgolb(req,res){
	var str = req.cookies
	console.log(str)
	var name = await users.find({'_id':str._id})
		res.render('robgolb',{
			name:name
		})
	
}
module.exports = robgolb
