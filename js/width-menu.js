$(".menu > ul > li").hover (
    function() {
        $(this).children("ul").stop().slideDown("slow");
    }, function() {
        $(this).children("ul").stop().slideUp("fast");
    }
);

$(".menu").hover (
    function() {
        $(".sub-menu").stop().slideDown("slow");
    }, function() {
        $(".sub-menu").stop().slideUp("fast");
    }
);