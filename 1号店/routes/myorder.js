const finorder = require('../model/finorder')
async function myorder(req,res){
	
	var str = req.cookies
	var finordergood = await finorder.find({"userid":str._id,"type":"good"})
	var finorderprice = await finorder.findOne({"userid":str._id,"paytime":req.params.type,"type":"allprice"})
	res.render('myorder',{
		finordergood,
		finorderprice
	})
}
module.exports = myorder