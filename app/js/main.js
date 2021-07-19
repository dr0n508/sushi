$(document).ready(function() {

    // Mobile menu
	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('.nav-mobile').toggleClass('active');
	});
	$(document).on('click', function(e) {

		if (!$(e.target).closest('.burger').length && !$(e.target).closest('.js-dropdown-menu').length) {

			$('.burger').removeClass('active');
            $('.nav-mobile').removeClass('active');
            $('.js-dropdown-menu').removeClass('active');
            $('body').removeClass('no_scroll');

		}
		e.stopPropagation();
	});

    $( ".js-categories" ).hover(function() {

        if ($(window).width() >= 1024) {
            $('body').toggleClass('no_scroll');
        }
    });

    $('.js-dropdown-menu').click(function(e){
        e.preventDefault();

        if ( $(this).hasClass('active')) {
            $(this).removeClass('active')
        }
        else {

            $('.js-dropdown-menu').removeClass('active');
            $(this).toggleClass('active');

        }

    });

    //custom imput number
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //remove item from cart
    $('.btn-close').click(function () {
        $(this).closest('.order-item').remove();
    });


    //Swiper sliders
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: false,
            prevEl: false,
        },
    });

    const swiper_rolls = new Swiper('.swiper-rolls', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,

        slidesPerView: 'auto',
        freeMode: 'true',

        slidesOffsetAfter: 120,

        navigation: {
            nextEl: '.next_product',
            prevEl: '.prev_product',
        }

    });



});

