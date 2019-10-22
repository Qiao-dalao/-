const goods = require('../model/goods.js')
function index(req,res){
    goods.find({type:'首页超级单品'}).then((result)=>{
      
      res.render('index',{
          results:result
      }) 
    });
      
}





module.exports = index
