const goods = require('../model/goods')

function a(req,res){
	goods.create({
		"couponslist" : "精选好券",
		"type" : "优惠分类",
	},{

    "couponslist" : "食品饮料",
    "type" : "优惠分类",
	"list":[
		{
			"type" : "优惠券",
			"img" : "/images/rong/1.jpg",
			"price" : 20,
			"quantype" : "食品饮料",
			"manjianquan" : "满减券",
			"manduoshao" : 1299,
			"limit" : "限购  [九柔进口食品专营店] 店铺商品",
			"way" : "免费领取",  
		},{
			
		}
	]

},

/* 51 */
{

    "couponslist" : "美妆个护",
    "type" : "优惠分类",

},

/* 52 */
{

    "couponslist" : "母婴玩具",
    "type" : "优惠分类",

},

/* 53 */
{

    "couponslist" : "活色生鲜",
    "type" : "优惠分类",

},
/* 54 */
{
 
    "couponslist" : "宠物园艺",
    "type" : "优惠分类",
 
},

/* 55 */
{

    "couponslist" : "医药保健",
    "type" : "优惠分类",

},

/* 56 */
{
  
    "couponslist" : "手机数码",
    "type" : "优惠分类",

},

/* 57 */
{
	"list":[{
		"type" : "优惠券",
		"quantype" : "家用电器",
		"img" : "/images/rong/42.jpg",
		"price" : 100,
		"manjianquan" : "满减券",
		"manduoshao" : 1000,
		"limit" : "限购  [葡悦旗舰店] 店铺商品",
		"way" : "免费领取",
	},{
		"type" : "优惠券",
		"quantype" : "家用电器",
		"img" : "/images/rong/41.jpg",
		"price" : 20,
		"manjianquan" : "满减券",
		"manduoshao" : 268,
		"limit" : "限购  [双喜厨房电器旗舰店] 店铺商品",
		"way" : "免费领取",   
	}],
    "couponslist" : "家用电器",
    "type" : "优惠分类",

})
	res.end('添加成功')
}
module.exports = a