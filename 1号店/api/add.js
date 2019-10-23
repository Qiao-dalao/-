const goods = require('../model/goods')

function a(req,res){
	goods.create({"username":'123'})

	res.end('添加成功')
}
module.exports = a