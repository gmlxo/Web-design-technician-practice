var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autosilde()", 3000);

function autosilde() {
    $(slide[sno]).stop().animate({
        right: "100%"
    }, 1000, function () {
        $(this).css({ right: "-100%" });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        right: "0"
    }, 1000)
}