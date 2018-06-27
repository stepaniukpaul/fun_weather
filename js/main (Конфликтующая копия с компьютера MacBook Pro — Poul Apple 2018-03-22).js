$(document).ready(function(){
//Слайдеры	  

    $('.slider').slick({
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt="Next" /></button>',
		prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt="Prev" /></button>',
		dots: false,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '-260px',
        slidesToShow: 3,
        responsive: [
    {
        breakpoint: 768,
        settings: {
        
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        } 
    }
  ]
});

$('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  variableWidth: true
});

//Прокрутка
	$('.go_to').click(function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1100); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
//Всплывающее окно
    $('.popup').click( function(e){
        e.preventDefault();
    	$('#orderFormWindow').arcticmodal();
	});
// Параллакс
    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.move',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 500,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 100,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    } else {
        // change functionality for larger screens
    }
// Гамбургер
    $('.menu__open').click(function () {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    })


    function fix_size() {
        var images = $('.img-container img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.img-container');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                img.height('100%');
                img.width('auto');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
   
});



