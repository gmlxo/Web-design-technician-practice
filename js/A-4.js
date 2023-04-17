$("div.menu").hover(
    function() {
        $("ul.sub-menu").stop().slideDown();
    }, function() {
        $("ul.sub-menu").stop().slideUp();
    }
);

function pop() {
    $("#pop").show();
}

function closePop() {
    $("#pop").hide();
}


var slide = $("div.slide>img");
var no = 0;
var num = slide.length - 1;
var timer = setInterval("silde()", 3000);

function silde() {
    $(slide[no]).stop().animate({
        opacity: 0
    }, 1000, function () {
        $(this).css({ opacity: .56 });
    });
    no++;
    if (no > num) {
        sno = 0;
    }
    $(slide[no]).stop().animate({
        opacity: 1
    }, 1000)
}