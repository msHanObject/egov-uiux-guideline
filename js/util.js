var btn = $("#nav_open");
btn.css("border", "1px solid red");
btn.click(function(e){
    e.preventDefault();
    var target = $("nav>ul");
    if(target.is(".hide")) {
        target.slideDown();
    } else {
        target.slideUp();
        target.removeClass("hide");
    }
});
// var li = $(".sidebar__navigation > li");
// var navLink = $(".sidebar a");
// var index = 0;
// navLink.click(
//     function (e) {
//         e.preventDefault();
//         var target = $(this).closest("li");
//         var targetSiblings = target.siblings("li");
//         if (target.is(".active")) {
//             target.find(".subnav").slideUp();
//             target.removeClass("active");
//         } else {
//             target.find(".subnav").slideDown();
//             for (var i = 0; i < targetSiblings.length; i++) {
//                 if ($(targetSiblings[i]).is(".active")) {
//                     $(targetSiblings[i]).removeClass("active");
//                     var targetSiblingsSubnav = $(targetSiblings[i]).find(".subnav");
//                     targetSiblingsSubnav.slideUp();
//                     if (targetSiblingsSubnav.children(".active")) {
//                         targetSiblingsSubnav.children(".active").removeClass("active");
//                     }
//                 }
//             }
//             target.addClass("active");
//         }
//     }
// );