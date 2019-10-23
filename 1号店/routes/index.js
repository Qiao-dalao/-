const goods = require('../model/goods.js')
const users = require('../model/users')
function index(req,res){
	var str = req.cookies
    goods.find({type:'首页超级单品'}).then((result)=>{
      users.find(str).then((name)=>{
		  res.render('index',{
		      results:result,
			  name:name
		  }) 
	  })
    });
      
}

module.exports = index
