// console.log(document.cookie)

$(function(){
    get()
})
function get(){
    var str = document.cookie
    var arr = str.split(';')
    var boo = false
    for (var i=0;i<arr.length;i++) {
        arr[i] = arr[i].trim().split('=') 
        if (arr[i][1] != 0) {
            var user = JSON.parse(unescape(arr[i][1]))
            boo=true
        } 
    }
    if (!boo) {
        location.href = '/login'
    }
    console.log(arr)
}
