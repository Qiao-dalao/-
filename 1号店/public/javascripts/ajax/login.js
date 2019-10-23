$('form').on('submit',(e)=>{
	e.preventDefault()
	$.ajax({
		url:'/user/login',
		type:'post',
		data:$('form').serialize(),
		success:function(data){
			layer.msg(data.msg)
			if(data.code){
				alert('123')
				setTimeout(()=>{
				    location.href = '/'
				},2000)
			}
		},
		err:(err)=>{
			console.log(err);
			alert('2354')
		}
	})
})
// console.log($('form').serialize())
