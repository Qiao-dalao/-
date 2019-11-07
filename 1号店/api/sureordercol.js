const shopcar = require('../model/shopcar')
const order = require('../model/order')
async function sureordercol(req,res){
    var str = req.cookies
    var id = req.body.id.split(',')
    
    var goods = []
    for(var i=0;i<id.length;i++){
        var a = await shopcar.find({"userid":str._id,"id":id[i]})
        goods.push(a)
    }
    for(var i=0;i<goods.length;i++){
        order.create({
            "img":goods[i][0].img,
            "miaoshu":goods[i][0].miaoshu,
            "price":goods[i][0].price,
            "num":goods[i][0].num,
            "userid":goods[i][0].userid,
            "id":goods[i][0].id,
        },(err,data)=>{
            
        })
    }
    order.create({
        "allprice":req.body.allprice,
        "useridprice":str._id,
        "type":"allprice"
    })
    var ordergood = await order.find({"userid":str._id})
    console.log(ordergood)
   res.end()
}
module.exports = sureordercol