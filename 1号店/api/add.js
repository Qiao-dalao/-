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

	goods.create(
		{
			type:'猜你喜欢',
			
			list:[
				{
					img:'/images/rong/zhacai.jpg',
					miaoshu:'乌江榨菜  榨菜酱腌菜   脆口榨菜 嘎嘣脆 榨菜 22g 重庆涪陵出品',
					price:1,
				},{
					img:'/images/rong/weihua.jpg',
					miaoshu:'印尼进口 Tango咔咔脆威化饼干 休闲零食小吃 早餐下午茶食品 巧克力味夹心160g/盒',
					price:19.9,
				}
			]
		},{
			type:'猜你喜欢',
		
		},{
			type:'猜你喜欢',
			img:'/images/rong/culiangbinggan.jpg',
			miaoshu:'英国进口 麦维他 原味全麦粗粮酥性消化饼干g 早餐下午茶零食',
			price:21.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/weihuajuan.jpg',
			miaoshu:'马来西亚进口 马奇新新 巧克力味注心威化卷85g 饼干蛋卷 办公室零食',
			price:9.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/feilieluo.jpg',
			miaoshu:'费列罗（Ferrero Rocher）进口糖果巧克力榛果威化 分享零食婚庆喜糖 员工福利 48粒礼盒装600g',
			price:128,
		},{
			type:'猜你喜欢',
			img:'/images/rong/jianpan.jpg',
			miaoshu:'前行者游戏背光发光牧马人真机械手感键盘鼠标套装lol键鼠台式有线薄膜网吧外设电脑笔记本USB外接键盘 牧马人黑色彩虹背光键盘+七彩黑鼠标',
			price:69,
		},{
			type:'猜你喜欢',
			img:'/images/rong/tuoxie.jpg',
			miaoshu:'南极人棉拖鞋 男拖鞋简约舒适保暖拖鞋方格纹棉拖藏青色290 19002',
			price:24.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/sanzhisongshu.jpg',
			miaoshu:'三只松鼠每日坚果大礼包 孕妇零食节日礼物送女友混合干果礼盒榛子腰果巴旦木葡萄干核桃仁开心果 750g/30袋',
			price:138,
		},{
			type:'猜你喜欢',
			img:'/images/rong/qianbao.jpg',
			miaoshu:'卡包男士钱包长款多卡位皮夹头层牛皮潮牌青年年轻人鹿头拉链卡夹大容量商务661 款式一',
			price:128,
		},{
			type:'猜你喜欢',
			img:'/images/rong/luoji.jpg',
			miaoshu:'罗技（Logitech）MK275 键鼠套装 无线键鼠套装 办公键鼠套装 全尺寸 黑蓝色 自营 带无线2.4G接收器',
			price:95,
		},{
			type:'猜你喜欢',
			img:'/images/rong/shounabao.jpg',
			miaoshu:'七匹狼男士手包 大容量头层牛皮拉链真皮钱包手拿包男包1A2154084-01黑色',
			price:195,
		},{
			type:'猜你喜欢',
			img:'/images/rong/yan.jpg',
			miaoshu:'中盐 盐 无碘纯精岩盐（未加碘）无碘食盐 400g 中盐出品',
			price:3.5,
		},{
			type:'猜你喜欢',
			img:'/images/rong/qiaokeli.jpg',
			miaoshu:'KDV俄罗斯原装进口巧克力休闲零食紫皮糖碎杏仁夹心巧克力净含量500克',
			price:19.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/dengguan.jpg',
			miaoshu:'佛山照明（FSL）T8灯管LED双端长1.2米16W日光色6500K 晶辉',
			price:17.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/dengpao.jpg',
			miaoshu:'欧普照明（OPPLE）LED灯泡节能灯泡 E27大螺口家用商用大功率光源 12瓦白光球泡',
			price:19.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/jiangyou.jpg',
			miaoshu:'海天 酱油 生抽酱油 1.9L 中华老字号',
			price:9.8,
		},{
			type:'猜你喜欢',
			img:'/images/rong/shoulian.jpg',
			miaoshu:'玉石手串礼物',
			price:158,
		},{
			type:'猜你喜欢',
			img:'/images/rong/daizhuangzhacai.jpg',
			miaoshu:'（10包9.9包邮）涪陵榨菜口口脆50g袋装榨菜鲜脆下饭菜咸菜脆口菜心即食',
			price:2,
		},{
			type:'猜你喜欢',
			img:'/images/rong/shijin.jpg',
			miaoshu:'子初婴儿手口柔湿巾90片*10包 新生儿纸巾 儿童宝宝湿巾',
			price:62,
		},{
			type:'猜你喜欢',
			img:'/images/rong/diandongyashua.jpg',
			miaoshu:'飞利浦(PHILIPS) 电动牙刷 成人声波震动牙刷(自带刷头*1) 机皇款 HX6730/02',
			price:379,
		},{
			type:'猜你喜欢',
			img:'/images/rong/reshuihu.jpg',
			miaoshu:'九阳（Joyoung）热水壶烧水壶电水壶 双层防烫304不锈钢 家用大容量电热水壶 K15-F626',
			price:69,
		},{
			type:'猜你喜欢',
			img:'/images/rong/kuaizi.jpg',
			miaoshu:'日本品牌FaSoLa 筷子勺子套装家用餐具三件套304不锈钢学生便携可爱收纳盒 米色(304不锈钢)',
			price:61,
		},{
			type:'猜你喜欢',
			img:'/images/rong/xiongzibing.jpg',
			miaoshu:'好吃点 熊字饼 休闲零食早餐饼干点心 115g',
			price:2.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/aoliao.jpg',
			miaoshu:'奥利奥（Oreo） Mini夹心小饼干 巧克力味休闲零食55g （新老包装随机发货）',
			price:6.8,
		},{
			type:'猜你喜欢',
			img:'/images/rong/zaogan.jpg',
			miaoshu:'新疆特产迪拜阿联酋大黑椰枣特级免洗新鲜椰枣干零食 椰枣500g/袋*1袋',
			price:29.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/tang.jpg',
			miaoshu:'泰国进口 京都念慈菴 枇杷糖 润喉糖 水果味糖果零食 硬糖 60g',
			price:21.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/naipian.jpg',
			miaoshu:'新疆特产骆驼奶片糖草原羊奶贝奶酪干吃片牛初乳零食 骆驼奶块238g/罐',
			price:39.9,
		},{
			type:'猜你喜欢',
			img:'/images/rong/nang.png',
			miaoshu:'新疆囊饼早餐囊特产芝麻油酥馕8个烤馕饼 新疆原味馕糕点心传统手工小吃馕饼 方便食品',
			price:66,
		},{
			type:'猜你喜欢',
			img:'/images/rong/dingshiqi.jpg',
			miaoshu:'厨房定时器 大声厨房做饭的定时器机械式烘焙煲汤小闹钟家用番茄钟计时器 番茄红',
			price:38,
		},{
			type:'猜你喜欢',
			img:'/images/rong/chuifengji.jpg',
			miaoshu:'飞科(FLYCO)电吹风机家用FH6218大功率吹风筒负离子 2000W',
			price:75,
		},{
			type:'猜你喜欢',
			img:'/images/rong/canju.jpg',
			miaoshu:'可爱不锈钢便携式餐具筷子勺子叉子套装三件套学生收纳盒子 北欧蓝[筷+勺+盒]',
			price:13,
		},{
			type:'猜你喜欢',
			img:'/images/rong/shaizi.jpg',
			miaoshu:'面粉筛家用美手持筛子面粉筛半自动不锈钢糖粉筛烘培家用面筛子超细 面粉筛',
			price:106,
		}
	)

	res.end('添加成功')
}
module.exports = a