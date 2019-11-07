const goods = require('../model/goods.js')
const users = require('../model/users')
async function notloginShopping(req,res){
    var results = await goods.find({type:'猜你喜欢'})
    var str = req.cookies
    if(str._id !=0){
        var name = await users.find({'_id':str._id})
        if(name.length==0){
            res.render('notloginShopping',{
                id:req.params.type,
                results,
                name:[{name:'注册 登录'}]
            }) 
        }else{
            res.render('notloginShopping',{
                id:req.params.type,
                results,
                name
            }) 
        }
    }else{
        res.render('notloginShopping',{
            id:req.params.type,
            results,
            name:[{name:'注册 登录'}]
        }) 
    }
}
module.exports = notloginShopping