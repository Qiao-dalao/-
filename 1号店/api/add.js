const goods = require('../model/goods')

function a(req,res){
	// goods.create({
	// 	type:"金币商城全部商品",
	// 	img:"/images/han/diazi.jpg",
	// 	miaoshu:"康尔 KingCamp 户外垫子睡垫防潮垫防污防水 露营野餐休闲防滑垫 超轻便携 210*200cm KG9001 彩虹条纹",
	// 	price:89.0,
	// 	golb:10,
	// 	oldprice:118
	// },{
	// 	type:"金币商城全部商品",
	// 	img:"https://m.360buyimg.com/babel/jfs/t1/58952/17/13739/218815/5da9746fE361df0db/a7f0c2c6988d400d.jpg",
	// 	miaoshu:"CASSILE卡思乐女包卡包牛皮短款休闲零钱包轻薄时尚拉链卡包 桔红色",
	// 	price:105.0,
	// 	golb:10,
	// 	oldprice:119
	// })
	res.end('添加成功')
}
module.exports = a