$(".menu > ul > li").hover(function () {
        // over
        $(this).children("ul").stop().slideDown("fast");
    }, function () {
        // out
        $(this).children("ul").stop().slideUp("fast");
    }
);


function popup() {
    $("#pop").show("show");
}

function closePop() {
    $("#pop").hide("fast");
}

var slide = $(".slide>img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autosilde()", 3000);

function autosilde() {
    $(slide[sno]).stop().animate({
        opacity: 0
    }, 1000, function () {
        $(this).css({ opacity: 0 });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        opacity: 1
    }, 1000)
}