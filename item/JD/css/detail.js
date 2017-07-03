var div=document.getElementById("div")
var imgs=div.getElementsByTagName("img")
for(var i=0;i<imgs.length;i++){
    imgs[i].onclick=function(){
        changePic(this.alt);
    }
}
function changePic(num) {
    var bigImg = document.getElementById("bigImg");
    bigImg.src = "images/product" + num + "big.jpg";
}