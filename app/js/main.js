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


// Mobile submenu
// 	$('.nav_item.has_child').on('click', function(){
// 		if ($(window).width() <= 767) {
// 			if ($(this).find('.sub_menu').css('display') == 'block') {
// 				$('.sub_menu').slideUp(300);
// 			} else {
// 				$('.sub_menu').slideUp(300);
// 				$(this).find('.sub_menu').slideDown(300);
// 			}
// 		}
// 	});

// Custom select
// $('.current_option').on('click', function(){
// 	if (!$(this).closest('.select').hasClass('active')) {
// 		$('.select').removeClass('active');
// 		$('.options').slideUp(200);
// 		$(this).closest('.select').addClass('active');
// 		$(this).closest('.select').find('.options').slideDown(200);
// 	} else {
// 		$(this).closest('.select').removeClass('active');
// 		$(this).closest('.select').find('.options').slideUp(200);
// 	}
// });
// $('.option').on('click', function(){
// 	$(this).closest('.select').find('.current_option').text($(this).text());
// 	$(this).closest('.select').find('.select_input').val($(this).text());
// 	$(this).closest('.select').removeClass('active');
// 	$('.options').slideUp(200);
// });
// $(document).on('click', function(e) {
// 	if (!$(e.target).closest('.select').length) {
// 		$('.select').removeClass('active');
// 		$('.options').slideUp(200);
// 	}
// 	e.stopPropagation();
// });

// Tabs TC
// $('.tab').on('click', function(){
// 	$('.tab').removeClass('active');
// 	$(this).addClass('active');
// 	$('.tc_content').css('display', 'none');
// 	$('.tc_content[data-index="'+$(this).data('index')+'"]').fadeIn(300);
//
// });