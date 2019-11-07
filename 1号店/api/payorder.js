const order = require('../model/order')
const finorder = require('../model/finorder')
const shopcar = require('../model/shopcar')

async function payorder(req,res){
    var str = req.cookies
	var allorder = await order.find({"userid":str._id})
    var allprice = await order.findOne({"type":"allprice"})
    for(var i=0;i<allorder.length;i++){
        await finorder.create({
            img:allorder[i].img,
            miaoshu:allorder[i].miaoshu,
            price:allorder[i].price,
            num:allorder[i].num,
            id:allorder[i].id,
            paytime:req.body.paytime,
            userid:str._id,
            type:"good"
        })
        await shopcar.remove({"userid":str._id,"id":allorder[i].id})
    }
    console.log(allprice)
    await finorder.create({
        "type":"allprice",
        "allprice":allprice.allprice,
        "userid":str._id,
        "paytime":req.body.paytime,
    })

    await order.remove({"userid":str._id})
    await order.remove({"type":"allprice"})
    res.end()
}
module.exports = payorder