const goods = require('../model/goods')
const users = require('../model/users')
function index(req,res){
	var str = req.cookies
    goods.find({type:'首页超级单品'}).then(async (results)=>{
	  var name = await users.find({'_id':str._id})
	  res.render('index',{
		results,
		name
	}) 
    });
}

module.exports = index
