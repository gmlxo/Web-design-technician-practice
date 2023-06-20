// display 를 동시에 두개를 못 먹여서 강제적으로 먹인거 _ 야메임 ㅎ
$(".main_menu>li>ul").css({ display: "none" });

$(".menu").hover(
    function() {
        $(".main_menu>li>ul").stop().animate({ width: "toggle" });
    }, function() {
        $(".main_menu>li>ul").stop().animate({ width: "toggle" });
    }
);

var slide = $(".slide>div");
var num = slide.length -2, index = 0;
var time = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[index]).stop().animate({
        opacity: "0"
    }, 1000);
    (index > num)? index=0: index+=1;
    $(slide[index]).animate({
        opacity: "1"
    }, 1000);
}