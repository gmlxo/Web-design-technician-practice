var slide = $(".slide > div");
var num = slide.length - 2, i = 0;
var time = setInterval("autoslide()", 3000);

$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().show(500);
    }, function() {
        $(this).children("ul").stop().hide(500);
    }
);

function autoslide() {
    $(slide[i]).stop().animate({
        left: "100%"
    }, 1000, function() {
        $(this).css({ left: "-100%" });
    });
    (i>num)? i=0: i+=1;
    $(slide[i]).stop().animate({
        left: "0"
    }, 1000);
}