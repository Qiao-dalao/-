const users = require('../model/users')
const express = require('express')
const app = express()
const formidable = require('formidable')
const goods = require('../model/goods')

function details(req,res){
	var str = req.cookies
	users.find(str).then((name)=>{
		goods.find({"id":req.params.type}).then((good)=>{
			res.render('details',{
				id:req.params.type,
				name:name,
				good:good
			})
		})
		
	})
    
}
module.exports=details



// function shopImg(req,res){
	
// 	showFile.showFile((album)=>{
		
// 		res.render('album',{
// 			imagesName:album,
// 			title:req.params.type
// 		})
// 	},req.params.type)
	
// 	app.post(__dirname+'/album'+req.params.type,(req,res)=>{
// 		var form = new formidable.IncomingForm();
// 		form.uploadDir = __dirname+'/photo/'+req.params.type+'/'
// 		form.parse(req,(err,fields,files)=>{
// 			if(!err){
// 				res.send('提交成功')
// 				fs.rename(files.file.path,__dirname+'/photo/'+req.params.type+'/',(err)=>{
// 					if(!err){
// 						console.log('上传成功')
// 					}else{
// 						console.log('上传失败')
// 					}
// 				})
// 			}else{
// 				throw new Error(err)
// 				console.log('提交失败')
// 			}
// 		})
// 	})
	
// }




