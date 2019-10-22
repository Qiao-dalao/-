const goods = require('../model/goods')
function golbsign(req,res){
	goods.find({address:"金币商城"}).then((result)=>{
		res.render('golbsign',{
			title: '1号店(yhd.com)_全球超市，轻松到家！' ,
			result:result
		})
	})
	
}
module.exports = golbsign