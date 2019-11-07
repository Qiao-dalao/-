const shopcar = require('../model/shopcar')

function del(req,res){
    var str = req.cookies
    // console.log(req.body.price.toFixed(1))
    // shopcar.update({"id":req.body.id,"userid":str._id},{$set:{"num":req.body.num,"xiaoji":req.body.xiaoji}},(err,data)=>{
    //     console.log(data)
    // })
    shopcar.remove({"id":req.body.id,"userid":str._id},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
        
    })
   
    res.end('成功')
    
}
module.exports = del




