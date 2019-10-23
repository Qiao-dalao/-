const users = require('../model/users')
function details(req,res){
	var str = req.cookies
	users.find(str).then((name)=>{
		res.render('details',{
		    title:'详情页',
			name:name
		})
	})
    
}
module.exports=details
