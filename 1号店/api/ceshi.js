const users = require('../model/users.js')
async function ceshi(req,res){
    var name = await users.find({'u':'123'})
    res.render('ceshi',{
        name
    })
}
module.exports = ceshi