$("ul").hover(
    function() {
        $("ul.sub").stop().slideDown();
    }, function() {
        $("ul.sub").stop().slideUp();
    }
);

var slide = $("div.slide>div");
var n = 0;
var num = slide.length - 1;
var time = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[n]).animate({
        left: "100%"
    }, 1000, function() {
        $(this).css({ left: "-100% "});
    });
    n++;
    if(n > num) n = 0;
    $(slide[n]).animate({
        left: "0"
    }, 1000);
}