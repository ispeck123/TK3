
// function headerHeight() {
//     var headerH = $(".header").height();
//     alert(headerH);
// }

// $(window).load(function);

$(document).ready(function () {
    $('#menuIcon').click(function(){
        $('body').toggleClass('active');
    });
    
    $(".header").sticky({topSpacing:0});

    $('.sidebar .sidebarWrap ul ul').parent('li').addClass('hasChild').prepend('<span class="dropDownIcon"></span>');
    
    $(document).on('click', '.dropDownIcon', function(event) {
        event.preventDefault();
        /* Act on the event */
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('active');
    });

    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
        $('body').toggleClass('pageLock');
        $('.pageContent').toggleClass('slidePage');
        $('.header').toggleClass('slideHeader');
    });


    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    $('#startDate').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        minDate: today,
        format: 'dd/mm/yyyy',
        maxDate: function () {
            return $('#endDate').val();
        }
    });
    $('#endDate').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        format: 'dd/mm/yyyy',
        minDate: function () {
            return $('#startDate').val();
        }
    });


    $('#sdModal').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        minDate: today,
        format: 'dd/mm/yyyy',
        maxDate: function () {
            return $('#endDate').val();
        }
    });
    $('#edModal').datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        format: 'dd/mm/yyyy',
        minDate: function () {
            return $('#startDate').val();
        }
    });


    var rangeSlider = function(){
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');
            
        slider.each(function(){
        
            value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
            });
        
            range.on('input', function(){
            $(this).next(value).html(this.value);
            });
        });
    };
	
	$('.rightBtn').click(function(){
        $('.fixed-right-bar').addClass('right-active');
    });
	
	$('.closeBtn').click(function(){
        $('.fixed-right-bar').removeClass('right-active');
    });
	
	
    $('.panel-collapse').on('show.bs.collapse', function () {
		$(this).siblings('.panel-heading').addClass('active');
	  });
	
	  $('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).siblings('.panel-heading').removeClass('active');
	  });
    
    rangeSlider();
});

$(window).resize(function(){
    $(".header").sticky({topSpacing:0});
});