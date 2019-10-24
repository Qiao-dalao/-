const goods = require('../model/goods')
const users = require('../model/users')

function golbsign(req,res){
	goods.find({address:"金币商城"}).then(async(result)=>{
		var str = req.cookies
		var name = await users.find({'_id':str._id})
			res.render('golbsign',{
				title: '1号店(yhd.com)_全球超市，轻松到家！' ,
				result:result,
				name:name
			})
		
		
	})
	
}
module.exports = golbsign