var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autosilde()", 2000); 

$(".slide").hover(function () {
        // over
        clearInterval(timer)
    }, function () {
        // out
        timer = setInterval("autosilde()", 2000);
    }
);

function autosilde() {
    $(slide[sno]).stop().animate({
        right: "100%"
    }, 500, function () {
        $(this).css({ right: "-100%" });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        right: "0"
    }, 500)
}