const users = require('../model/users')
function robgolb(req,res){
	var str = req.cookies
	console.log(str)
	users.find(str).then((name)=>{
		res.render('robgolb',{
			name:name
		})
	})
}
module.exports = robgolb
