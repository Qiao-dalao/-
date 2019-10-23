var navCenter = document.querySelector('.nav-center')
window.onscroll=function(){
	var gundongtop = document.documentElement.scrollTop
	if(gundongtop>=149){
		navCenter.style.position='fixed'
		navCenter.style.top=0
		navCenter.style.zIndex=2
		navCenter.style.background='white'
	}else{
		navCenter.style.position='static'
	}
}

