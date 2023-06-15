$(".main_menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown();
    }, function() {
        $(this).children("ul").stop().slideUp();
    }
);

var slide = $(".slide>div");
var n = 0, num = slide.length-2;
setInterval(() => {
    $(slide[n]).animate({
        top: "100%"
    }, 1000, function() {
        $(this).css({ top: "-100%"})
    });
    n = (n>num)? 0: n+=1;
    $(slide[n]).animate({
        top: "0"
    }, 1000);
}, 3000);

$(".n_t").click(
    function() {
        $(".n_t").css({ "background-color": "#fff"});
        $(".g_t").css({ "background-color": "#777"});
        $(".n_t_box").show();
        $(".n_g_box").hide();
    }
);

$(".g_t").click(
    function() {
        $(".g_t").css({ "background-color": "#fff"});
        $(".n_t").css({ "background-color": "#777"});
        $(".n_g_box").show();
        $(".n_t_box").hide();
    }
);