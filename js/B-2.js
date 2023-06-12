$("#menu").hover(
    function() {
        $(".sub-box").stop().slideDown();
    }, function() {
        $(".sub-box").stop().slideUp();
    }
);

var slide = $(".slide>div");
var num = $(".slide>div").length - 1;
var n = 0;
var time = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[n]).animate({
        top: "-100%"
    }, 1000, function() {
        $(this).css({ top: "100%" });
    });
    n = (n+1>num)? n=0: n+=1;
    $(slide[n]).animate({ top: 0 }, 1000);
}

function popup() {
    $("#pop").show();
}

function popclose() {
    $("#pop").hide();
}