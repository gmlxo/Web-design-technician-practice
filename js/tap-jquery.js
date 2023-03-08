$(".tab-news").click(function () {
    $(this).css({
        "border-bottom": "0",
        "backgraound-color": "#fff"
    });
    $(".tab-gallery").css({
        "border-bottom": "1px solid #000",
        "backgraound-color": "#888"
    });
    $(".gallery").hide();
    $(".news").show();
});

$(".tab-gallery").click(function () {
    $(this).css({
        "border-bottom": "0",
        "backgraound-color": "#fff"
    });
    $(".tab-news").css({
        "border-bottom": "1px solid #000",
        "backgraound-color": "#888"
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