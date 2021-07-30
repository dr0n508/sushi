$(document).ready(function() {

    // Mobile menu
	$('.burger').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('.nav-mobile').toggleClass('active');
	});
	$(document).on('click', function(e) {

		if (!$(e.target).closest('.burger').length &&
            !$(e.target).closest('.js-dropdown-menu').length &&
            !$(e.target).closest('#cart-button').length
        ) {

			$('.burger').removeClass('active');
            $('.nav-mobile').removeClass('active');
            $('.js-dropdown-menu').removeClass('active');
            $('body').removeClass('no_scroll');

            $('.cart-container').removeClass('show');
            $('#cart-button').removeClass('active');

		}
		e.stopPropagation();
	});

    $( ".js-categories" ).hover(function() {

        if ($(window).width() >= 1024) {
            $('body').toggleClass('no_scroll');
        }
    });


    $('#cart-button').click(function(e){


        $('.cart-container').toggleClass('show');
        $('#cart-button').toggleClass('active');

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

    ////////////////////////////
    //Swiper sliders
    ////////////////////////////

    //ad-slider
    const ad_slider = new Swiper('.ad-slider-container', {
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

    //rolls-slider
    const rolls_slider = new Swiper('.rolls-slider-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: 'true',

        slidesOffsetAfter: 120,

        navigation: {
            nextEl: '.rolls-btn-next',
            prevEl: '.rolls-btn-prev',
        }

    });

    //sushi-slider
    const sushi_slider = new Swiper('.sushi-slider-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: 'true',

        slidesOffsetAfter: 120,

        navigation: {
            nextEl: '.sushi-btn-next',
            prevEl: '.sushi-btn-prev',
        }

    });

    //drinks-slider
    const drinks_slider = new Swiper('.drinks-slider-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: 'true',

        slidesOffsetAfter: 120,

        navigation: {
            nextEl: '.drinks-btn-next',
            prevEl: '.drinks-btn-prev',
        }

    });

    //recomend-slider
    const recomend_slider = new Swiper('.recomend-slider-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: 'true',

        slidesOffsetAfter: 120,

        navigation: {
            nextEl: '.recom-btn-next',
            prevEl: '.recom-btn-prev',
        }

    });

    //consist_slider
    const consist_slider = new Swiper('.consist-slider-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 10,
        freeMode: 'true',
        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            }
        },

        navigation: {
            nextEl: '.consist-btn-next',
            prevEl: '.consist-btn-prev',
        },

    });
    ///////////end-sliders//////
    ////////////////////////////

    //tabs account
    $(function() {
        $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })
    });

    // init Isotope
    setTimeout(() => {  {

        var $grid = $('.grid-filter').isotope({
            itemSelector: '.product-item',
            layoutMode: 'fitRows'
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };
        // bind filter button click
        $('.filters-button-group').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

    } }, 100);



    //Maps OpenLayers

    // var mymap = L.map('mapid').setView([48.664, 33.120], 13);


    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'pk.eyJ1IjoiZHIwbiIsImEiOiJja3JkaG95eGM1Y2JiMndvNjNodjFhbGF4In0.MqNK135lDIEytB6raP4Jdw'
    // }).addTo(mymap);

    // var marker = L.marker([48.664, 33.120]).addTo(mymap);


    ////////////////////////////
    //Animate
    ////////////////////////////
    AOS.init();

    ////////////////////////////
    //new custom select
    ////////////////////////////

    // Iterate over each select element
    $('.new-custom-select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('s-hidden');

        // Wrap the select element in a div
        $this.wrap('<div class="select"></div>');

        // Insert a styled div to sit over the top of the hidden select element
        $this.after('<div class="styledSelect"></div>');

        // Cache the styled div
        var $styledSelect = $this.next('div.styledSelect');

        // Show the first select option in the styled div
        $styledSelect.text($this.children('option').eq(0).text());

        // Insert an unordered list after the styled div and also cache the list
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);

        // Insert a list item into the unordered list for each select option
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        // Cache the list items
        var $listItems = $list.children('li');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            /* alert($this.val()); Uncomment this for demonstration! */
        });

        // Hides the unordered list when clicking outside of it
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

});