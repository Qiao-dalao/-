const goods = require('../model/goods')

function a(req,res){
	goods.create(
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/1.jpg",
			"miaoshu" : "【英红九号旗舰店】 积庆里广东特产英德红茶 150克 东方美人 礼盒 茶叶 中秋送礼工夫",
			"num" : 15,
			"numnow" : "15%",
			"price" : 298,
			"oldprice" : 318,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/4.jpg",
			"miaoshu" : "玉品堂 防蓝光老花镜 男女时尚超轻防疲劳高清护目防蓝光辐射眼镜老光远视镜 老花眼镜 5030红色 200度",
			"num" : 81,
			"numnow" : "81%",
			"price" : 98,
			"oldprice" : 199,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/2.jpg",
			"miaoshu" : "Clarks其乐女鞋 正装通勤浅口粗跟高跟单鞋Grace Isabella 黑色-261258634 36",
			"num" : 51,
			"numnow" : "51%",
			"price" : 1298,
			"oldprice" : 1299,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/5.jpg",
			"miaoshu" : "【新品】天王表（TIAN WANG）手表 自动机械表钢带手表休闲时尚腕表女表 白盘钢带女表",
			"num" : 73,
			"numnow" : "73%",
			"price" : 298,
			"oldprice" : 318,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/6.jpg",
			"miaoshu" : "张小壮 第二件9.9元 精挑15个大果 广西百香果 北流百香果新鲜采摘 单果50-100g",
			"num" : 15,
			"numnow" : "15%",
			"price" : 298,
			"oldprice" : 318,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/3.png",
			"miaoshu" : "雷治（Dr.RAY） 雷治泰国进口按泵压式液体膏美白去牙渍烟渍口臭牙膏 配送牙刷 炭黑礼盒+蜜桃礼盒[动物随机]",
			"num" : 87,
			"numnow" : "87%",
			"price" : 69,
			"oldprice" : 99,
			"__v" : 0
		}
		
		,
		{
		
			"type" : "超级单品抢购",
			"img" : "/images/zhao/444.jpg",
			"miaoshu" : "红蜻蜓男鞋2019秋季新品爸爸鞋商务休闲真皮鞋舒适低帮简约老头鞋 棕色 41",
			"num" : 94,
			"numnow" : "94%",
			"price" : 239,
			"oldprice" : 479,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/222.jpg",
			"miaoshu" : "yaloo/雅鹿反季冬装羽绒服女2019新款爆款中长款大毛领时尚工装外套潮 粉色 M",
			"num" : 99,
			"numnow" : "99%",
			"price" : 898.2,
			"oldprice" : 2599,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/111.jpg",
			"miaoshu" : "JEEP吉普男装加绒长袖衬衫男士秋季新款休闲大码灯芯绒寸衣纯棉衬 黑色 XL",
			"num" : 99,
			"numnow" : "99%",
			"price" : 210.0,
			"oldprice" : 248,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/10.jpg",
			"miaoshu" : "俞兆林保暖内衣男士蓄热加厚加绒黄金暖绒套装 深灰 XL",
			"num" : 9,
			"numnow" : "9%",
			"price" : 59.0,
			"oldprice" : 129,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/8.jpg",
			"miaoshu" : "阿芙（AFU） 精油洗发护发系列套装 迷迭香依兰依兰昆士兰圣约翰草 深层修护滋养柔顺控油 迷迭香洗发水245ml",
			"num" : 80,
			"numnow" : "80%",
			"price" : 99.0,
			"oldprice" : 138,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/7.png",
			"miaoshu" : "磐鼎双USB一拖三高品质3.1A大电流一拖三汽车充电器车载充电器独立按键一拖三 白色",
			"num" : 51,
			"numnow" : "51%",
			"price" : 49.9,
			"oldprice" : 59.9,
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级单品抢购",
			"img" : "/images/zhao/11.jpg",
			"miaoshu" : "七匹狼男士休闲裤 秋季新款青年商务长裤纯色直筒男装裤子2926 602土黄色 33/84A",
			"num" : 90,
			"numnow" : "90%",
			"price" : 157.0,
			"oldprice" : 559,
			"__v" : 0
		}
	    ,
		{
			
			"type" : "超级品牌列表",
			"describe1" : "衣香丽影",
			"describe2" : "查看更多",
			"img" : "/images/zhao/99.jpg",
			"list" : [ 
				{
					"img" : "/images/zhao/888.jpg",
					"price" : 279,
					"oldprice" : 799
				}, 
				{
					"img" : "/images/zhao/777.jpg",
					"price" : 300,
					"oldprice" : 800
				}, 
				{
					"img" : "/images/zhao/999.jpg",
					"price" : 120,
					"oldprice" : 600
				}
			],
			"__v" : 0
		}
		,
		{
			
			"type" : "超级品牌列表",
			"describe1" : "欧莱雅（LOREAL）",
			"describe2" : "查看更多",
			"img" : "/images/zhao/6666.jpg",
			"list" : [ 
				{
					"img" : "/images/zhao/66666.jpg",
					"price" : 219,
					"oldprice" : 599
				}, 
				{
					"img" : "/images/zhao/666666.jpg",
					"price" : 68.9,
					"oldprice" : 200
				}, 
				{
					"img" : "/images/zhao/66666666.jpg",
					"price" : 289,
					"oldprice" : 598
				}
			],
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级品牌列表",
			"describe1" : "张裕（CHANGYU）",
			"describe2" : "查看更多",
			"img" : "/images/zhao/333.jpg",
			"list" : [ 
				{
					"img" : "/images/zhao/44444.jpg",
					"price" : 45,
					"oldprice" : 65
				}, 
				{
					"img" : "/images/zhao/555555.jpg",
					"price" : 45,
					"oldprice" : 59
				}, 
				{
					"img" : "/images/zhao/99999999.jpg",
					"price" : 78,
					"oldprice" : 98
				}
			],
			"__v" : 0
		}
		
		,
		{
			"type" : "超级品牌列表",
			"describe1" : "公牛（BULL）",
			"describe2" : "查看更多",
			"img" : "/images/zhao/gongniu1.jpg",
			"list" : [ 
				{
					"img" : "/images/zhao/gongniu2.jpg",
					"price" : 269,
					"oldprice" : 299
				}, 
				{
					"img" : "/images/zhao/gongniu3.jpg",
					"price" : 18.9,
					"oldprice" : 21
				}, 
				{
					"img" : "/images/zhao/gongniu4.jpg",
					"price" : 24.6,
					"oldprice" : 27.6
				}
			],
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级品类列表",
			"describe1" : "母婴好物",
			"describe2" : "查看更多",
			"img" : "/images/zhao/pinlei1.jpg",
			"list" : [ 
				{
					"img" : "/images/zhao/pinlei2.jpg",
					"price" : 277,
					"oldprice" : 825
				}, 
				{
					"img" : "/images/zhao/pinlei3.jpg",
					"price" : 74,
					"oldprice" : 234
				}, 
				{
					"img" : "/images/zhao/pinlei4.jpg",
					"price" : 248,
					"oldprice" : 698
				}
			],
			"__v" : 0
		}
		
		,
		{
			
			"type" : "超级品类列表",
			"describe1" : "戴森（DYSON）",
			"describe2" : "查看更多",
			"img" : "/images/zhao/dai1.png",
			"list" : [ 
				{
					"img" : "/images/zhao/dai2.png",
					"price" : 289,
					"oldprice" : 799
				}, 
				{
					"img" : "/images/zhao/dai3.jpg",
					"price" : 37.9,
					"oldprice" : 99
				}, 
				{
					"img" : "/images/zhao/dai4.jpg",
					"price" : 249,
					"oldprice" : 659
				}
			],
			"__v" : 0
		}
		,
		
		{
			
			"type" : "超级品类列表",
			"describe1" : "健康好物购",
			"describe2" : "查看更多",
			"img" : "/images/zhao/shop1.png",
			"list" : [ 
				{
					"img" : "/images/zhao/shop2.png",
					"price" : 45,
					"oldprice" : 65
				}, 
				{
					"img" : "/images/zhao/shop3.png",
					"price" : 45,
					"oldprice" : 59
				}, 
				{
					"img" : "/images/zhao/shop4.png",
					"price" : 78,
					"oldprice" : 98
				}
			],
			"__v" : 0
		}
		
		,
		{
			"type" : "超级品类列表",
			"describe1" : "苹果（APPLES）",
			"describe2" : "查看更多",
			"img" : "/images/zhao/ping1.png",
			"list" : [ 
				{
					"img" : "/images/zhao/ping2.jpg",
					"price" : 269,
					"oldprice" : 299
				}, 
				{
					"img" : "/images/zhao/ping3.png",
					"price" : 18.9,
					"oldprice" : 21
				}, 
				{
					"img" : "/images/zhao/ping4.png",
					"price" : 24.6,
					"oldprice" : 27.6
				}
			],
			"__v" : 0
		})
		

	res.end('添加成功')
}
module.exports = a
