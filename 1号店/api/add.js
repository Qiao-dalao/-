const goods = require('../model/goods')

function a(req,res){
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
	res.end('添加成功')
}
module.exports = a