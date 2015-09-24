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
};

$(document).ready(DoSquare());
$(window).on("resize", DoSquare());