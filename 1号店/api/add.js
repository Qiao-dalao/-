const goods = require('../model/goods')

function a(req,res){
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
			list:[
				{
					img:'/images/rong/culiangbinggan.jpg',
					miaoshu:'英国进口 麦维他 原味全麦粗粮酥性消化饼干g 早餐下午茶零食',
					price:21.9,
				},{
					img:'/images/rong/weihuajuan.jpg',
					miaoshu:'马来西亚进口 马奇新新 巧克力味注心威化卷85g 饼干蛋卷 办公室零食',
					price:9.9,
				}
			]
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/feilieluo.jpg',
					miaoshu:'费列罗（Ferrero Rocher）进口糖果巧克力榛果威化 分享零食婚庆喜糖 员工福利 48粒礼盒装600g',
					price:128,
				},{
					img:'/images/rong/jianpan.jpg',
					miaoshu:'前行者游戏背光发光牧马人真机械手感键盘鼠标套装lol键鼠台式有线薄膜网吧外设电脑笔记本USB外接键盘 牧马人黑色彩虹背光键盘+七彩黑鼠标',
					price:69,
				}
			]		
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/tuoxie.jpg',
					miaoshu:'南极人棉拖鞋 男拖鞋简约舒适保暖拖鞋方格纹棉拖藏青色290 19002',
					price:24.9,
				},{
					img:'/images/rong/sanzhisongshu.jpg',
					miaoshu:'三只松鼠每日坚果大礼包 孕妇零食节日礼物送女友混合干果礼盒榛子腰果巴旦木葡萄干核桃仁开心果 750g/30袋',
					price:138,
				}
			]		
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/qianbao.jpg',
					miaoshu:'卡包男士钱包长款多卡位皮夹头层牛皮潮牌青年年轻人鹿头拉链卡夹大容量商务661 款式一',
					price:128,
				},{
					img:'/images/rong/luoji.jpg',
					miaoshu:'罗技（Logitech）MK275 键鼠套装 无线键鼠套装 办公键鼠套装 全尺寸 黑蓝色 自营 带无线2.4G接收器',
					price:95,
				}
			]		
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/shounabao.jpg',
					miaoshu:'七匹狼男士手包 大容量头层牛皮拉链真皮钱包手拿包男包1A2154084-01黑色',
					price:195,
				},{
					img:'/images/rong/yan.jpg',
					miaoshu:'中盐 盐 无碘纯精岩盐（未加碘）无碘食盐 400g 中盐出品',
					price:3.5,
				}
			]		
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/qiaokeli.jpg',
					miaoshu:'KDV俄罗斯原装进口巧克力休闲零食紫皮糖碎杏仁夹心巧克力净含量500克',
					price:19.9,
				},{
					img:'/images/rong/dengguan.jpg',
					miaoshu:'佛山照明（FSL）T8灯管LED双端长1.2米16W日光色6500K 晶辉',
					price:17.9,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/dengpao.jpg',
					miaoshu:'欧普照明（OPPLE）LED灯泡节能灯泡 E27大螺口家用商用大功率光源 12瓦白光球泡',
					price:19.9,
				},{
					img:'/images/rong/jiangyou.jpg',
					miaoshu:'海天 酱油 生抽酱油 1.9L 中华老字号',
					price:9.8,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/shoulian.jpg',
					miaoshu:'玉石手串礼物',
					price:158,
				},{
					img:'/images/rong/daizhuangzhacai.jpg',
					miaoshu:'（10包9.9包邮）涪陵榨菜口口脆50g袋装榨菜鲜脆下饭菜咸菜脆口菜心即食',
					price:2,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/shijin.jpg',
					miaoshu:'子初婴儿手口柔湿巾90片*10包 新生儿纸巾 儿童宝宝湿巾',
					price:62,
				},{
					img:'/images/rong/diandongyashua.jpg',
					miaoshu:'飞利浦(PHILIPS) 电动牙刷 成人声波震动牙刷(自带刷头*1) 机皇款 HX6730/02',
					price:379,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/reshuihu.jpg',
					miaoshu:'九阳（Joyoung）热水壶烧水壶电水壶 双层防烫304不锈钢 家用大容量电热水壶 K15-F626',
					price:69,
				},{
					img:'/images/rong/kuaizi.jpg',
					miaoshu:'日本品牌FaSoLa 筷子勺子套装家用餐具三件套304不锈钢学生便携可爱收纳盒 米色(304不锈钢)',
					price:61,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/xiongzibing.jpg',
					miaoshu:'好吃点 熊字饼 休闲零食早餐饼干点心 115g',
					price:2.9,
				},{
					img:'/images/rong/aoliao.jpg',
					miaoshu:'奥利奥（Oreo） Mini夹心小饼干 巧克力味休闲零食55g （新老包装随机发货）',
					price:6.8,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/zaogan.jpg',
					miaoshu:'新疆特产迪拜阿联酋大黑椰枣特级免洗新鲜椰枣干零食 椰枣500g/袋*1袋',
					price:29.9,
				},{
					img:'/images/rong/tang.jpg',
					miaoshu:'泰国进口 京都念慈菴 枇杷糖 润喉糖 水果味糖果零食 硬糖 60g',
					price:21.9,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/naipian.jpg',
					miaoshu:'新疆特产骆驼奶片糖草原羊奶贝奶酪干吃片牛初乳零食 骆驼奶块238g/罐',
					price:39.9,
				},{
					img:'/images/rong/zhi.jpg',
					miaoshu:'日本品牌FaSoLa 蒸笼纸 一次性不粘蒸包子蒸笼垫家用馒头蒸笼布面包纸垫 圆形直径8.8cm*50张',
					price:37,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/dingshiqi.jpg',
					miaoshu:'厨房定时器 大声厨房做饭的定时器机械式烘焙煲汤小闹钟家用番茄钟计时器 番茄红',
					price:38,
				},{
					img:'/images/rong/chuifengji.jpg',
					miaoshu:'飞科(FLYCO)电吹风机家用FH6218大功率吹风筒负离子 2000W',
					price:75,
				}
			]	
		},{
			type:'猜你喜欢',
			list:[
				{
					img:'/images/rong/canju.jpg',
					miaoshu:'可爱不锈钢便携式餐具筷子勺子叉子套装三件套学生收纳盒子 北欧蓝[筷+勺+盒]',
					price:13,
				},{
					img:'/images/rong/shaizi.jpg',
					miaoshu:'面粉筛家用美手持筛子面粉筛半自动不锈钢糖粉筛烘培家用面筛子超细 面粉筛',
					price:106,
				}
			]	
		}
	)
	res.end('添加成功')
}
module.exports = a