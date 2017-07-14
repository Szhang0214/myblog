/*运行fullpage插件*/
$(function () {
    $('#fullpage').fullpage();
});
/*第二屏开始导航条吸顶*/
var first = document.querySelector("first");
var $first=$(first);
var nav = document.querySelector("nav");
//窗体滚动的时候 判断页面被卷去的头部的高度 如果 大于顶部部分的高度
//此时 就要把 导航栏 变为固定定位
// window.onscroll=function () {
//     console.log(scroll().top)
//     if(scroll().top>first.offsetHeight){
//         nav.className="fixed";
//     }else {
//         nav.className="";
//     }
// }
//不是窗口滚动事件，而是鼠标滚轮滚动事件
// $(window).on("scroll",function(){
//     console.log("scroll")
// })

$("body").on("mousewheel", function () {
    // setTimeout(function () {
    //
    // },100)
    if ($(".section.fp-table.active").is(".first")) {
        console.log("absolute");
        $(".nav").css({position: "absolute","z-index":0});
    }else{
        console.log("fixed")
        $(".nav").css({position: "fixed","z-index":1});
    }
});