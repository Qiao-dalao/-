var nologin = document.querySelectorAll('.nologin')
var allogin = document.querySelector('.al-login')
var str = document.cookie
var arr = str.split(';')
var boo = false
for (var i=0;i<arr.length;i++) {
	arr[i] = arr[i].trim().split('=') 
	if (arr[i][0] === '_id') {
		boo=true
		for(var i=0;i<nologin.length;i++){
			nologin[i].style.display='none';
		}
		allogin.style.display='block';
	} 
}
if (!boo) {
   for(var i=0;i<nologin.length;i++){
		nologin[i].style.display='block';
   }
   allogin.style.display='none';
}
console.log(arr)	
