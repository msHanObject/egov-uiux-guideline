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
    var component = pattern.children("ul");
    component.addClass("hide");
    pattern.focusin(function(){
        var u = $(this).children("ul");
        u.slideDown();
        
        if($(this).siblings().focusin(function(){
            u.slideUp();
        }));
    });
    pattern.hover(
        function(){
            $(this).children("ul").slideDown();
        },
        function(){
            $(this).children("ul").slideUp();
        }
    );
    component.click(function(){
        navClickFunc();
    })
});