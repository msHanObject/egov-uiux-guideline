var btn = $("#nav_open");
var target = $("nav > ul");
btn.click(function(e){
    e.preventDefault();
    
    if(target.is(".hide")) {
        target.slideDown();
        target.removeClass("hide");
    } else {
        target.slideUp();
        target.addClass("hide");
    }
});