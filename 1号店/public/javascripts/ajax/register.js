$('form').on('submit',(e)=>{
	e.preventDefault()
	if(mima.value==suremima.value){
		$.ajax({
			url:'/user/register',
			type:'post',
			data:$('form').serialize(),
			success:function(data){
				layer.msg(data.msg)
				if(data.code){
					setTimeout(()=>{
						location.href = '/login'
					},1000)
				}
			},
			err:(err)=>{
				console.log(err);
			}
		})
	}else{
		layer.msg('两次密码输入不一致')
	}
})
// console.log($('form').serialize())
