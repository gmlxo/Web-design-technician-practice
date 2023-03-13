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
        top: "-100%"
    }, 1000, function () {
        $(this).css({ top: "100%" });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        top: "0"
    }, 1000)
}

$(".slide").hover(
    function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval("autosilde()", 3000);
    }
)

$(".tab-news").click(function () {
    $(this).css({
        "border-bottom": "0",
        "background-color": "#fff"
    });
    $(".tab-gallery").css({
        "border-bottom": "1px solid #000",
        "background-color": "#888"
    });
    $(".gallery").hide();
    $(".news").show();
});

$(".tab-gallery").click(function () {
    $(this).css({
        "border-bottom": "0",
        "background-color": "#fff"
    });
    $(".tab-news").css({
        "border-bottom": "1px solid #000",
        "background-color": "#888"
    });
    $(".news").hide();
    $(".gallery").show();
});

function openPop() {
    $("#pop").show("show");
}

function closePop() {
    $("#pop").hide("fist");
}