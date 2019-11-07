window.onload=function(){
var right = document.querySelector('.right')
var left = document.querySelector('.left')
var move = document.querySelector('#move')
var reddian = document.querySelectorAll('.reddian')
var xhr
if(XMLHttpRequest){
    xhr = new XMLHttpRequest()
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}







var m=0
right.onclick=function(){

    if(m == 3){
        m==3
    }else{
        for(var i=0;i<reddian.length;i++){
            reddian[i].style.width='10px'
            reddian[i].style.background='#e5e5e5'
        }
        m++
        move.style.transition='500ms'
        move.style.left=-m*224*4+'px'
        reddian[m].style.width='18px'
        reddian[m].style.background='#ff5e5e'
   
    }
    
}
left.onclick=function(){
    
    if(m==0){
        m==0
    }else{
        for(var i=0;i<reddian.length;i++){
            reddian[i].style.width='10px'
            reddian[i].style.background='#e5e5e5'
        }
        m--
        move.style.transition='500ms'
        move.style.left=-m*224*4+'px'
        reddian[m].style.width='18px'
        reddian[m].style.background='#ff5e5e'
    }
    

}
for(var i=0;i<reddian.length;i++){
    reddian[i].index=i
    reddian[i].onclick=function(){
        for(var j=0;j<reddian.length;j++){
            reddian[j].style.width='10px'
            reddian[j].style.background='#e5e5e5'
        }
        this.style.width='18px'
        this.style.background='#ff5e5e'
        move.style.transition='500ms'
        move.style.left=-this.index*224*4+'px'
        m = this.index
    }
}
var saleitem = document.querySelectorAll('.sale_item')
for(var i=0;i<saleitem.length;i++){

saleitem[i].onclick=function(){

}
}

var empty = document.querySelector('.empty')
var noempty = document.querySelector('.no-empty')
var panduan = document.querySelector('#panduan').innerHTML
if(panduan==0){
    empty.style.display='block'
    noempty.style.display='none'
}else if(panduan==1){
    empty.style.display='none'
    noempty.style.display='block'
}

var delanniu = document.querySelectorAll('.delanniu')
var del = document.querySelectorAll('.del')
var delred = document.querySelectorAll('.delred')

for(var i=0;i<delanniu.length;i++){
delanniu[i].index=i
delanniu[i].onmouseover=function(){
    del[this.index].style.display='none'
    delred[this.index].style.display='block'
    this.style.cursor='pointer'
}
delanniu[i].onmouseleave=function(){
    delred[this.index].style.display='none'
    del[this.index].style.display='block'
}
delanniu[i].onclick=function(){
    
}
}



var add = document.querySelectorAll('.add')
var jian = document.querySelectorAll('.jian')
var number = document.querySelectorAll('.number')
var everyxinxi = document.querySelectorAll('.everyxinxi')
var xiaoji = this.document.querySelectorAll('.xiaoji')
var price = this.document.querySelectorAll('.price')

for(var i=0;i<add.length;i++){
    add[i].index = i
    jian[i].index = i
    add[i].onclick=function(){
        if(number[this.index].value<1){
            xhr.open('POST','/numadd',true)    //true表示异步
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`num=1&&id=${everyxinxi[this.index].id}&&xiaoji=${xiaoji[this.index].innerHTML = 1*(price[this.index].innerHTML-0)}`)  //发送请求
            //接收响应
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    //代表响应就绪
                    if(xhr.status==200){
                        //代表请求成功
                        //xhr.responseText  接收响应数据
                        // JSON.parse(xhr.responseText)    //字符串转换成对象
                        // console.log(xhr.responseText)
                        location.href='/loginShopping'
                    }
                }
            }
        }else{
            xhr.open('POST','/numadd',true)    //true表示异步
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`num=${(number[this.index].value-0)+1}&&id=${everyxinxi[this.index].id}&&xiaoji=${xiaoji[this.index].innerHTML = ((number[this.index].value-0)+1)*(price[this.index].innerHTML-0)}`)  //发送请求
            //接收响应
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    //代表响应就绪
                    if(xhr.status==200){
                        //代表请求成功
                        //xhr.responseText  接收响应数据
                        // JSON.parse(xhr.responseText)    //字符串转换成对象
                        // console.log(xhr.responseText)
                        location.href='/loginShopping'
                    }
                }
            }
        }
        
        
    }
    jian[i].onclick=function(){
        if(number[this.index].value<=1){
            xhr.open('POST','/numadd',true)    //true表示异步
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`num=1&&id=${everyxinxi[this.index].id}&&xiaoji=${xiaoji[this.index].innerHTML = 1*(price[this.index].innerHTML-0)}`)  //发送请求
            //接收响应
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    //代表响应就绪
                    if(xhr.status==200){
                        //代表请求成功
                        //xhr.responseText  接收响应数据
                        // JSON.parse(xhr.responseText)    //字符串转换成对象
                        // console.log(xhr.responseText)
                        location.href='/loginShopping'
                    }
                }
            }
        }else{
            xhr.open('POST','/numadd',true)    //true表示异步
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(`num=${(number[this.index].value-0)-1}&&id=${everyxinxi[this.index].id}&&xiaoji=${xiaoji[this.index].innerHTML = ((number[this.index].value-0)-1)*(price[this.index].innerHTML-0)}`)  //发送请求
        
        
            //接收响应
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    //代表响应就绪
                    if(xhr.status==200){
                        //代表请求成功
                        //xhr.responseText  接收响应数据
                        // JSON.parse(xhr.responseText)    //字符串转换成对象
                        // console.log(xhr.responseText)
                        location.href='/loginShopping'
                    }
                }
            }
        }
        
    }
}

var checkbox = this.document.querySelectorAll('.checkbox')
var allprice = this.document.querySelector('.allprice')
var quanxuan = this.document.querySelector('.quanxuan')
var stop
for(var i=0;i<checkbox.length;i++){
checkbox[i].index = i

checkbox[i].onclick=function(){
    console.log(this.checked)
    if(this.checked == true){ //  选中尼玛状态
        allprice.innerHTML = (xiaoji[this.index].innerHTML-0)+(allprice.innerHTML-0)
        
    }else{  //取消选中
        allprice.innerHTML = (allprice.innerHTML-0)-(xiaoji[this.index].innerHTML-0)
        quanxuan.checked = false
        
    }
    stop = 1
    for(var j=0;j<checkbox.length;j++){
        if(checkbox[j].checked==false){
            stop = 0
            break
        }
    }
   
    if(stop == 1){
        quanxuan.checked = true
        
        
    }
    console.log(stop)
    
}
}
var a=0
quanxuan.onclick=function(){
    for(var j=0;j<xiaoji.length;j++){
        a = (xiaoji[j].innerHTML-0) + a
        console.log(xiaoji[j].innerHTML)
    }
    for(var i=0;i<checkbox.length;i++){
        if(this.checked == true){
            checkbox[i].checked = true
            allprice.innerHTML = a
        }else{
            a=0
            checkbox[i].checked = false
            allprice.innerHTML = a
        }
    }
}
var delanniu = this.document.querySelectorAll('.delanniu')
for(var i=0;i<delanniu.length;i++){
delanniu[i].onclick=function(){
    
    xhr.open('POST','/del',true)    //true表示异步
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    xhr.send(`id=${this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id}`)  //发送请求
    //接收响应
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            //代表响应就绪
            if(xhr.status==200){
                //代表请求成功
                //xhr.responseText  接收响应数据
                // JSON.parse(xhr.responseText)    //字符串转换成对象
                // console.log(xhr.responseText)
                // location.href='/loginShopping'
                console.log('删除成功')
            }
        }
    }
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)

}
}

var jiesuan = this.document.querySelector('.jiesuan')
var xuanzhong = false
var xuanzhonglist = []
var xuanzhongid = []
jiesuan.onclick=function(){
    for(var i=0;i<checkbox.length;i++){
        if(checkbox[i].checked == true){
            xuanzhong = true
            break
        }
    }
    if(xuanzhong == false){
        alert('请选择商品')
    }else{
        for(var i=0;i<checkbox.length;i++){
            if(checkbox[i].checked == true){
                xuanzhonglist.push(i)
            }
        }
        
        for(var i=0;i<xuanzhonglist.length;i++){
            xuanzhongid.push(everyxinxi[xuanzhonglist[i]].id)
        }
        xhr.open('POST','/sureordercol',true)    //true表示异步
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        xhr.send(`id=${xuanzhongid}&&allprice=${allprice.innerHTML} `)  //发送请求
        
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                location.href='/sureorder'
                console.log('添加购物车成功')
            }
        }
    }
}
}