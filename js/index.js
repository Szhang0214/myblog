/*运行fullpage插件*/
$(function () {
    $('#fullpage').fullpage();
});
/*第二屏开始导航条吸顶*/
var first = document.querySelector("first");
var $first=$(first);
var nav = document.querySelector("nav");
$("body").on("mousewheel", function () {
    // setTimeout(function () {
    //
    // },100)
    if ($(".section.fp-table.active").is(".first")) {
        $(".nav").css({position: "absolute","z-index":0});
    }else{
        $(".nav").css({position: "fixed","z-index":1});
    }
});

/*筋斗云设置*/
var lastPosition=0;
var cloud=document.getElementById("cloud");
var navbar=document.getElementById("navbar");
var lis=navbar.children;
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function () {
        var target=this.offsetLeft;
        animate(cloud,target);
    }
    lis[i].onmouseout=function () {
        animate(cloud,lastPosition);
    }
    lis[i].onclick=function () {
        lastPosition=this.offsetLeft;
        //阻止a标签默认跳转
        return false;

    }
}

/*点击右下角图标，返回顶部*/
var timer = null;
var fullpage=document.getElementById("fullpage");
var sections=fullpage.children;
var backTop = document.getElementById("backTop");
//1.往下滚动后 显示图片
//鼠标滚动事件
document.body.onmousewheel = function () {
    backTop.style.display = "block";

};
//2.点击图片 返回顶部
backTop.onclick = function () {
    //window.scrollTo(0, 0);
    timer = setInterval(function () {
        var target = 0;
        var leader = scroll().top;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        window.scrollTo(0, leader);
        if (leader === target) {
            clearInterval(timer);
        }
    }, 15);
};