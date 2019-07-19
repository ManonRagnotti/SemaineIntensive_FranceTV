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

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
          return '<span class="numero">' + (index + 1) + '</span>';
        },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})