var btm=document.querySelector('.bottom')
var div=document.querySelector('.hd_menu_list')

btm.onclick=function(){
    var a = getComputedStyle(div).display
    if(a == 'none'){
        div.style.display='block'
    }else if(a == 'block'){
        div.style.display='none'
    }
}