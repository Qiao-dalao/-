const goods = require('../model/goods')

function a(req,res){
<<<<<<< HEAD
	goods.create({
		"type":"全部商品",
		"address":"金币商城",
		"list":[
			{
				img:"/images/han/肉松棒.jpg",
				miaoshu:"友臣肉松棒1kg传统糕点心网红小零食休闲零食小吃营养早餐下午茶 原味肉松棒15枚/约500g",
				price:15.9,
				golb:30,
				oldprice:18.9
			},{
				img:"/images/han/安徒生童话.jpg",
				miaoshu:"3册快乐读书吧三年级上册 课外书必读 安徒生童话 格林童话全集稻草人书叶圣陶正版三年级语文课外阅读",
				price:25.8,
				golb:10,
				oldprice:29.8
			},{
				img:"/images/han/紫米面包.jpg",
				miaoshu:"友臣紫米面包520g营养早餐黑米夹心奶油夹心吐司食品新鲜短保整箱 红色",
				price:17.9,
				golb:30,
				oldprice:22.9
			},{
				img:"/images/han/大枣.jpg",
				miaoshu:"西域美农 和田特级大枣2500g 每日红枣新疆和田玉大枣免洗6星大枣量贩装",
				price:89.0,
				golb:10,
				oldprice:99.0
			},{
				img:"/images/han/男鞋.jpg",
				miaoshu:"意尔康男鞋2019秋季新款商务正装皮鞋男舒适牛皮圆头系带低帮单鞋S195AE66677WD 黑色 40",
				price:246.0,
				golb:10,
				oldprice:279.0
			},
			{
				img:"/images/han/肉松棒.jpg",
				miaoshu:"友臣肉松棒1kg传统糕点心网红小零食休闲零食小吃营养早餐下午茶 原味肉松棒15枚/约500g",
				price:15.9,
				golb:30,
				oldprice:18.9
			},{
				img:"/images/han/安徒生童话.jpg",
				miaoshu:"3册快乐读书吧三年级上册 课外书必读 安徒生童话 格林童话全集稻草人书叶圣陶正版三年级语文课外阅读",
				price:25.8,
				golb:10,
				oldprice:29.8
			},{
				img:"/images/han/紫米面包.jpg",
				miaoshu:"友臣紫米面包520g营养早餐黑米夹心奶油夹心吐司食品新鲜短保整箱 红色",
				price:17.9,
				golb:30,
				oldprice:22.9
			},{
				img:"/images/han/大枣.jpg",
				miaoshu:"西域美农 和田特级大枣2500g 每日红枣新疆和田玉大枣免洗6星大枣量贩装",
				price:89.0,
				golb:10,
				oldprice:99.0
			},{
				img:"/images/han/男鞋.jpg",
				miaoshu:"意尔康男鞋2019秋季新款商务正装皮鞋男舒适牛皮圆头系带低帮单鞋S195AE66677WD 黑色 40",
				price:246.0,
				golb:10,
				oldprice:279.0
			}
		]
	}
	,{
		"type" : "食品饮料",
		"address" : "金币商城",
		"list":[
			{
				img:"/images/han/肉松棒.jpg",
				miaoshu:"友臣肉松棒1kg传统糕点心网红小零食休闲零食小吃营养早餐下午茶 原味肉松棒15枚/约500g",
				price:15.9,
				golb:30,
				oldprice:18.9
			},{
				img:"/images/han/肉松饼.jpg",
				miaoshu:"友臣（YOUCHEN） 友臣旗舰店 友臣肉松饼整箱1.25kg/2.5斤原味传统糕点闽台特产零食小吃 肉松饼原味500g散装14个",
				price:16.9,
				golb:30,
				oldprice:18.9
			},{
				img:"/images/han/紫米面包.jpg",
				miaoshu:"友臣紫米面包520g营养早餐黑米夹心奶油夹心吐司食品新鲜短保整箱 红色",
				price:17.9,
				golb:30,
				oldprice:22.9
			},{
				img:"/images/han/紫米面包.jpg",
				miaoshu:"友臣紫米面包520g营养早餐黑米夹心奶油夹心吐司食品新鲜短保整箱 红色",
				price:17.9,
				golb:30,
				oldprice:22.9
			},{
				img:"/images/han/灰枣.jpg",
				miaoshu:"西域美农 新疆灰枣5斤箱装 每日红枣",
				price:36.9,
				golb:10,
				oldprice:39.9
			},{
				img:"/images/han/大枣.jpg",
				miaoshu:"西域美农 和田特级大枣2500g 每日红枣新疆和田玉大枣免洗6星大枣量贩装",
				price:89.0,
				golb:10,
				oldprice:99.0
			},{
				img:"/images/han/手撕面包.jpg",
				miaoshu:"友臣（YOUCHEN） 友臣手撕面包 1000g 早餐蛋糕软面包办公室下午茶点心零食 日期新鲜 手撕面包原味500g",
				price:11.8,
				golb:30,
				oldprice:15.9
			},{
				img:"/images/han/葡萄干.jpg",
				miaoshu:"西域美农 玫瑰红葡萄干 蜜饯果干新疆特产吐鲁番葡萄干提子干果250g*2袋",
				price:17.9,
				golb:10,
				oldprice:19.9
			},{
				img:"/images/han/男鞋.jpg",
				miaoshu:"意尔康男鞋2019秋季新款商务正装皮鞋男舒适牛皮圆头系带低帮单鞋S195AE66677WD 黑色 40",
				price:246.0,
				golb:10,
				oldprice:279.0
			}
		]
	},{

    "address" : "金币商城",
    "type" : "服饰鞋帽",
	"list":[
		{
			img:"/images/han/安徒生童话.jpg",
			miaoshu:"3册快乐读书吧三年级上册 课外书必读 安徒生童话 格林童话全集稻草人书叶圣陶正版三年级语文课外阅读",
			price:25.8,
			golb:10,
			oldprice:29.8
		},{
			img:"/images/han/孔子.jpg",
			miaoshu:"洋洋兔 有故事的诸子百家漫画版全6册【赠音频】你好孔子孟子老子庄子韩非子鬼谷子 画给孩子的大师经典",
			price:98.0,
			golb:10,
			oldprice:116.0
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		}
	]

},
{

    "address" : "金币商城",
    "type" : "医药保健",
	"list":[
		{
			img:"/images/han/安徒生童话.jpg",
			miaoshu:"3册快乐读书吧三年级上册 课外书必读 安徒生童话 格林童话全集稻草人书叶圣陶正版三年级语文课外阅读",
			price:25.8,
			golb:10,
			oldprice:29.8
		},{
			img:"/images/han/孔子.jpg",
			miaoshu:"洋洋兔 有故事的诸子百家漫画版全6册【赠音频】你好孔子孟子老子庄子韩非子鬼谷子 画给孩子的大师经典",
			price:98.0,
			golb:10,
			oldprice:116.0
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		},{
			img:"/images/han/压缩面膜.jpg",
			miaoshu:"朵拉朵尚 隐形全棉压缩面膜(一次性DIY水疗纸膜蚕丝工艺干面膜纸) 全新升级50片（买1送1）",
			price:28.0,
			golb:10,
			oldprice:29.9
		}
	]

}


)
=======
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
>>>>>>> 6dc7b6f5c87026b61f9911e5028ffb88cce6b421
	res.end('添加成功')
}
module.exports = a