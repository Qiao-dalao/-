const goods = require('../model/goods.js')
function notloginShopping(req,res){
    goods.find({type:'猜你喜欢'}).then((result)=>{
        res.render('notloginShopping',{
            results:result
        })
    });     
}
module.exports = notloginShopping