$(document).ready(function(){
//Слайдер	  
    $('.slider').slick({
        centerMode: true,
        centerPadding: '220px',
        slidesToShow: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png" alt="Next" /></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png" alt="Prev" /></button>',
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: false
          }
        },
      ]
    });
// Анимация
// Добавление класса при наведении курсора
    $('.offer__download').hover(function(){ 
        $(this).toggleClass('bounceIn');
    });
    $('.offer__features').hover(function(){ 
        $(this).toggleClass('jello');
    });
// Инициализация анимации
    $(window).scroll(function() {
    $('.cloudy__phone').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("fadeInLeftBig");
            }
        });
    });
    
    $(window).scroll(function() {
    $('.sunny__phone').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("fadeInRightBig");
            }
        });
    });  

    $(window).scroll(function() {
    $('.cloudy__circle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+300) {
            $(this).addClass("fadeIn");
            }
        });
    });

    $(window).scroll(function() {
    $('.fifteen__circle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("fadeIn");
            }
        });
    });

    $(window).scroll(function() {
    $('.sunny__circle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+300) {
            $(this).addClass("fadeIn");
            }
        });
    });

    $(window).scroll(function() {
    $('.th-five__circle').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("fadeIn");
            }
        });
    }); 

    $(window).scroll(function() {
    $('.reviews__comment_left').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
    $('.reviews__comment_right').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("fadeInRight");
            }
        });
    }); 
//Прокрутка
	$('.go_to').click(function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1100); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
// Гамбургер
    $('.menu__open').click(function () {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    })
// Добавление стилей, поиск по атрибуту
    $('[title="Не влезай - убьет"]')
        .css({'border':'3px solid red', 'background-color': '#ffcc00'
    }); 
  
});
