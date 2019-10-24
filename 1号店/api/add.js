const goods = require('../model/goods')

function a(req,res){
	goods.create({
		"img" : "/images/rong/zhacai.jpg",
		"miaoshu" : "乌江榨菜  榨菜酱腌菜   脆口榨菜 嘎嘣脆 榨菜 22g 重庆涪陵出品",
		"price" : 1,
		"id":61
	}, 
	{
		"img" : "/images/rong/weihua.jpg",
		"miaoshu" : "印尼进口 Tango咔咔脆威化饼干 休闲零食小吃 早餐下午茶食品 巧克力味夹心160g/盒",
		"price" : 19.9,
		"id":62
	})

		

	res.end('添加成功')
}
module.exports = a
