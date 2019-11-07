const users = require('../model/users')
const express = require('express')
const app = express()
const formidable = require('formidable')
const goods = require('../model/goods')

async function details(req,res){
	var str = req.cookies
	var good = await goods.find({"id":req.params.type})
	if(str._id !=0){
		var name = await users.find({'_id':str._id})
		if(name.length==0){
			res.render('details',{
				id:req.params.type,
				good,
				name:[{name:'注册 登录'}]
			}) 
		}else{
			res.render('details',{
				id:req.params.type,
				good,
				name
			}) 
		}
	}else{
		res.render('details',{
			id:req.params.type,
			good,
			name:[{name:'注册 登录'}]
		}) 
	}
	
	
		

    
}
module.exports=details



