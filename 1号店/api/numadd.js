const shopcar = require('../model/shopcar')

function numadd(req,res){
    var str = req.cookies
    // console.log(req.body.price.toFixed(1))
    shopcar.update({"id":req.body.id,"userid":str._id},{$set:{"num":req.body.num,"xiaoji":req.body.xiaoji}},(err,data)=>{
        console.log(data)
    })
    console.log(req.body)
    
    res.end('成功')
    
}
module.exports = numadd
//测试
// numadd()



//shopcar.update({"id":panduanshopcar[0].id,"userid":panduanshopcar[0].userid},{$set:{"num":m}},(err,data)=>{
    // 		console.log(data)
    // })