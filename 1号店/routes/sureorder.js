const shopcar = require('../model/shopcar')
const order = require('../model/order')
async function sureorder(req,res){
    var str = req.cookies
    if(str._id !=0){
        var ordergood = await order.find({"userid":str._id})
        var allprice = await order.findOne({"useridprice":str._id,"type":"allprice"})
        console.log(allprice)
        res.render('sureorder',{
            goods:ordergood,
            allprice:allprice.allprice
        })
    }
    
}
module.exports = sureorder