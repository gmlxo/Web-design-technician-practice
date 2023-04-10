$("ul.main>li").hover(function () {
        // over
        $(this).children("ul").stop().slideDown("slow");
    }, function () {
        // out
        $(this).children("ul").stop().slideUp("slow");
    }
);

$(".notice").click(function (e) { 
    $(".notice").css({
        "background-color": "#0066ad"
    });$(".gallery").css({
        "background-color": "#fff"
    });

    $(".notice-box").show();
    $(".gallery-box").hide();
});


$(".gallery").click(function (e) { 
    $(".gallery").css({
        "background-color": "#0066ad"
    });$(".notice").css({
        "background-color": "#fff"
    });

    $(".gallery-box").show();
    $(".notice-box").hide();
});

var slide = $(".slide>div");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autosilde()", 3000);

function autosilde() {
    $(slide[sno]).stop().animate({
        opacity: 0
    }, 17000)
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        opacity: 1
    }, 1300)
}

function popup() {
    $("#pop").show();
}

$(".pop-btn").click(function (e) { 
    $("#pop").hide();
});