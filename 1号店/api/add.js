const goods = require('../model/goods')

function a(req,res){
	goods.create(
		{
			type:'首页超级单品',
			img:'/images/rong/9hao.jpg',
			miaoshu:'【英红九号旗舰店】 积庆里广东特产英德红茶 150克 东方美人 礼盒 茶叶 中秋送礼工夫',
			price:298,
			oldprice:318
		},{
			type:'首页超级单品',
			img:'/images/rong/shaxuan.jpg',
			miaoshu:'沙宣造型啫喱水强力持久150ml（发蜡 发泥 发胶 头发护理 定型喷雾）',
			price:22.8,
			oldprice:23.9
		},{
			type:'首页超级单品',
			img:'/images/rong/fansizhe.jpg',
			miaoshu:'VERSACE 范思哲 奢侈品 19秋冬新款 男士黑色牛皮压纹美杜莎徽标卡片夹卡夹 DPN7425 DGOVV D41OH',
			price:1326,
			oldprice:1490
		},{
			type:'首页超级单品',
			img:'/images/rong/qipilang.jpg',
			miaoshu:'七匹狼钱包 男士短款休闲两折横款头层牛皮卡包钱夹多功能皮夹3A1313233-02啡色',
			price:71,
			oldprice:89
		},{
			type:'首页超级单品',
			img:'/images/rong/weiwei.jpg',
			miaoshu:'维维 纯香经典 营养早餐 黑芝麻糊（无添加蔗糖型）560g',
			price:19.9,
			oldprice:29.8
		},{
			type:'首页超级单品',
			img:'/images/rong/songxia.jpg',
			miaoshu:'松下(Panasonic) 开关插座面板 智趣系列 86型 四位单控 四开单联WMZ507',
			price:39.6,
			oldprice:55.5
		},{
			type:'首页超级单品',
			img:'/images/rong/feimisi.jpg',
			miaoshu:'飞米斯（FMIX）户外服装 羽绒冲锋衣男 三合一两件套冲锋衣裤加绒加厚羽绒内胆防风防寒登山服 男军绿 XL',
			price:539,
			oldprice:599
		},{
			type:'首页超级单品',
			img:'/images/rong/jianabao.jpg',
			miaoshu:'嘉娜宝kracie日本食玩可食可吃全套小伶套装寿司甜甜圈便当造型糖社会人儿童玩具迷你厨房小猪佩奇礼盒 4盒+2袋',
			price:105,
			oldprice:130
		},{
			type:'首页超级单品',
			img:'/images/rong/lvlian.jpg',
			miaoshu:'绿联 车载充电器 点烟器一拖三一拖二双usb快充 汽车用品电源转换器分线器插头 通用苹果华为小米手机 40733【极光银 5.8A总电流】',
			price:54.9,
			oldprice:59,
			list:[
				{
					
				}
			]
		}
	)
	res.end('添加成功')
}
module.exports = a