const goods = require('../model/goods')
function golbsign(req,res){
	goods.find({type:"金币商城全部商品"}).then((result)=>{
		res.render('golbsign',{
			title: '1号店(yhd.com)_全球超市，轻松到家！' ,
			result:result
		})
	})
	
}
module.exports = golbsign