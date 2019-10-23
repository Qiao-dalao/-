// function loginShopping(req,res){
//     res.render('loginShopping',{
		
// 	})
// }
// module.exports = loginShopping

const goods = require('../model/goods.js')
function loginShopping(req,res){
    goods.find({type:'猜你喜欢'}).then((result)=>{
        res.render('loginShopping',{
            results:result
        })
    });     
}
module.exports = loginShopping