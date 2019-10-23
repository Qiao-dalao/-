$('form').on('submit',(e)=>{
	e.preventDefault()
	$.ajax({
		url:'/user/register',
		type:'post',
		data:$('form').serialize(),
		success:function(data){
			layer.msg(data.msg)
			if(data.code){
				// setTimeout(()=>{
				//     location.href = '/'
				// },2000)
			}
		},
		err:(err)=>{
			console.log(err);
		}
	})
})
// console.log($('form').serialize())
