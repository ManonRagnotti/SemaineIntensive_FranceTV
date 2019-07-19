$(document).ready(function() {
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".listSocial").fadeOut();
            $(".socialBar").addClass("fixed");
        } else{
            $(".listSocial").fadeIn();
            $(".socialBar").removeClass("fixed");
        }
    });
});

AOS.init();