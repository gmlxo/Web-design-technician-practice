$(".menu-box").hover(function() { $(".menu-box>ul>li>ul").stop().slideDown();}, function() { $(".menu-box>ul>li>ul").stop().slideUp(); });
var slide = $(".slide>div"), num = slide.length-1, n=0, time = setInterval("autoslide()", 3000);
function autoslide() {
    $(slide[n]).animate({ left: "-100%" }, 1000, function() { $(this).css({ left: "100%"}); }), 1000 
    n++; if(n>num) n=0; $(slide[n]).animate({ left: "0" }, 1000); 
}
// 찾아봄 _ 현 잘 모르는 거
$(slide).hover(function() { clearInterval(time); }, function() { time = setInterval("autoslide()", 3000); });

$(".n-t").click(function() { $(".n-t").css({ "background-color": "#ccccff"}); $(".g-t").css({ "background-color": "#fff"}); $(".n-box").css({ "background-color": "#ccccff"}); $(".n-box").show(); $(".g-box").hide(); });
$(".g-t").click(function() { $(".g-t").css({ "background-color": "#ccccff"}); $(".n-t").css({ "background-color": "#fff"}); $(".g-box").css({ "background-color": "#ccccff"}); $(".g-box").show(); $(".n-box").hide(); });

function pop() { $("#pop").show(); }
function popClose() { $("#pop").hide(); }