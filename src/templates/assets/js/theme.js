console.log('theme.js loaded')
$('.carousel').carousel({
  interval: 3000 //changes the speed
})


function DoSquare(){
    $(".square").height(function(){
        return $(this).width();

    });

    $( window ).resize(function() {



        $(".square").height(function(){
            return $(this).width();

        });


    });
}
$(document).ready(DoSquare());
$(window).on("resize", DoSquare());

$(function() {
    $('a[href*=#]:not([href=\'#myCarousel\'])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && this.pathname !== '#myCarousel') {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top -50
                }, 400);
                return false;
            }
        }
    });
});