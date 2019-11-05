$(document).ready(function () {
    var btn = $("#nav_open");
    var pt_list = $("nav>ul");
    var navClickFunc = function(){
        if (pt_list.is(".hide")) {
            pt_list.slideDown();
            pt_list.removeClass("hide");
        } else {
            pt_list.slideUp();
            pt_list.addClass("hide");
        }
    };
    btn.click(function(e){
        navClickFunc();
    });
    var pattern = $("nav>ul>li");
    pattern.click(function(){
       navClickFunc();
    });
    pattern.hover(
        function(){
            $(this).children("ul").slideDown();
        },
        function(){
            $(this).children("ul").slideUp();
        }
    );
    $("nav>ul>li>ul>li>a").focus(
        function(){
            console.log(this);
            $(this).children("ul").slideDown();
        }
    );
    $("nav>ul>li>ul>li>a").blur(
        function(){
            $(this).children("ul").slideUp();
        }
    );
});