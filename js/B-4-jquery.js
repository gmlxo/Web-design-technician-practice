$(".menu").hover(
    function () {
        $(".sub-menu").stop().slideDown("slow");
    }, function () {
        $(".sub-menu").stop().slideUp("slow");
    }
);

var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autosilde()", 3000);

function autosilde() {
    $(slide[sno]).stop().animate({
        left: "-100%"
    }, 1000, function () {
        $(this).css({ left: "100%" });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        left: "0"
    }, 1000)
}

function openPop() {
    $("#pop").show("show");
}

function closePop() {
    $("#pop").hide("fast");
}