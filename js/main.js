 
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
  


jQuery('form')[0].reset();


// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения',
            },
            email:{
              required:'Поле обязательно для заполнения', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){
                   $(".js-form").trigger('reset');
                 $('#loader').fadeOut();
                },800);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                },100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
 }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });







// таймер

 jQuery(function($){
   $("#mas").mask("+7(999) 999-9999");
   });


 jQuery(function($){
   $("#mas1").mask("+7(999) 999-9999");
   });

 jQuery(function($){
   $("#mas2").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#mas4").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#mas8").mask("+7(999) 999-9999");
   });

jQuery(function($){
   $("#mas9").mask("+7(999) 999-9999");
   });
jQuery(function($){
   $("#mas10").mask("+7(999) 999-9999");
   });



 // $(".menu_hidden").click(function(){
 //    $(".menu_menu").toggleClass("mobileMenu");
 //  });


 $(".menu_hidden").click(function(){
    $(".menu_menu").toggleClass("lef");
  });


















// $(document).ready(function(){
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // создаем объект
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
//             // Присваиваем значение background-position
//             var coords = 'center '+ yPos + 'px';
//             // Создаем эффект Parallax Scrolling
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });

// $('.parallax-window').parallax({imageSrc: '../img/main-bg.jpg'});

// $(document).ready(function(){
// 	// Кешируем объект окна
// 	$window = $(window);
                
//    $('[data-type="background"]').each(function(){
//      var $bgobj = $(this); // Назначаем объект
                    
//       $(window).scroll(function() {
                    
// 		// Прокручиваем фон со скоростью var.
// 		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
// 		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
// 		// Размещаем все вместе в конечной точке
// 		var coords = '50% '+ yPos + 'px';

// 		// Смещаем фон
// 		$bgobj.css({ backgroundPosition: coords });
		
// 	}); 

//  });	

// }); 

// плавная прокрутка



$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });



// слайдер

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
   autoplay: false,
  autoplaySpeed: 6000,
  // centerMode:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// модальное окно

$(function(){
  $('.act').click(function (){
 
    $('#exampleModal').arcticmodal();
  });
});

//   $('button.popap').click(function() {
//     var parent = $(this).attr('data-parent');
//     var modal = $(this).attr('data-target')
//     $(modal).find('input[name=target]').val(parent);
//   })
// })

// mini сайдер
 $('.single-item').slick({
  dots: true,
 });



// гамбургер
$(document).ready(function(){
$(".menu_hidden").click(function(){
  $("#menu_hidden").toggleClass(".visible");
    });
});




// меню






$('.responsiv').slick({
  dots: false,
  infinite: true,
  speed: 300,
   autoplay: false,
  autoplaySpeed: 6000,
  // centerMode:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// форма


// slider

$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                dots:false,
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
        });




$('.responsi').slick({
  dots: true,
  infinite: true,
  speed: 300,
   autoplay: false,
  autoplaySpeed: 6000,
  // centerMode:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




// слайдер для страницы карточка

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: false,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 4,
//   slidesToScroll:1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   fade: false,
//   focusOnSelect: false
// });
  

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  // fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  // dots: true,
  centerMode: true,
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








// смена активного меню при прокрутке


$(document).ready(function(){
  $(".menu_header").changeActiveNav();
});