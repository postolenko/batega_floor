var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var popupName;
var popupBlock;
var hide_element;

var fileValArr;
var fileName;
var parentBlock;
var fileNameWrapp;

$(window).load(function() {

    getPromoPaddingTop();

});

$(window).resize(function() {

    getPromoPaddingTop()

});

$(document).scroll(function() {

  getAnimation();

  onScroll();

});


$(document).ready(function() {

    getAnimation();

    onScroll();

    $('.main-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            menu = target;
            $target = $(target);

        if( $target.length > 0 ) {
        
            $('a').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        }

    });

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( popupBlock.is(":visible") ) {

                    popupBlock.fadeOut(300);

                }

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });


        $(document).mouseup(function (e){

            hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.closest(".popup_wrapp").fadeOut(300);
            }

        });

    });

    $(function() {

      $("input[type='tel']").mask("+7 (999) 999-99-99");

    });

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_wrapp").is(":hidden") ) {

                $(".main-nav_wrapp").fadeIn(300);

                $(this).addClass("active");

            } else {

                $(".main-nav_wrapp").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".main-nav_wrapp").is(":visible") ) {

                    $(".main-nav_wrapp").fadeOut(300);

                    $(".respmenubtn").removeClass("active");

            }

        });

    });

    $( "input[type='file']" ).change(function() {

      fileValArr = $(this).val().split("\\");

      fileName = fileValArr[fileValArr.length - 1];

      parentBlock = $(this).closest(".file-upload");

      fileNameWrapp = parentBlock.find(".file_name");

      fileNameWrapp.text(fileName);

    });

});

function getPromoPaddingTop() {

    $(".promo_box").css({
        "padding-top" : $(".header").height() + "px"
    });

}

function getAnimation() {

  $("section").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}

function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('.main-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if( refElement.length > 0 ) {

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.main-nav li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }

        }

    });

}