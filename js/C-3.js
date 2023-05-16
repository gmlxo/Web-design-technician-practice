$(".main>li").hover(
    function() { $(this).children("ul").stop().slideDown();
    }, function () { $(this).children("ul").stop().slideUp(); }
);

var slide = $(".slide>div"),num=slide.length-1, n=0, time = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[n]).stop().animate({
        left: "-100%"
    }, 1000, function() {
        $(this).css({ left: "100%" });
    });
    n++; if(n>num) n=0;
    $(slide[n]).stop().animate({ left: 0 }, 1000);
}

function popClose() { $("#pop").hide(); } function popUp() { $("#pop").show(); }