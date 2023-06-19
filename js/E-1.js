$(".menu ul li").hover(
    function () {
        $(this).children("ul").stop().slideDown();
    }, function () {
        $(this).children("ul").stop().slideUp();
    }
);

var slide = $(".slide>div");
var num = slide.length - 2;
var n = 0;
var time = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[n]).stop().animate({
        left: "100%"
    }, 1000, function () {
        $(this).css({ left: "-100%" });
    });
    (n > num) ? n = 0 : n += 1;
    $(slide[n]).stop().animate({
        left: "0"
    }, 1000);
}