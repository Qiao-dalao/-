const users = require('../model/users')

function login(req,res){
	console.log(req.body)
	users.findOne({"username":req.body.username,"password":req.body.password})
		.then((result)=>{
            if(result){
				
				res.cookie('_id',result._id.toString());
                res.json({
                    code:1,
                    msg: '登录成功',
					
					
                })
            }else{
				console.log('222222222')
                res.json({
                    code:0,
                    msg: '账户/密码错误'
                })
            }
        })
}
module.exports = login