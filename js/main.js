"use strict"

//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})




$(document).ready(function () {



      $('.dr-slider').slick({
        slidesToShow: 2,
        appendArrows: '.page-dr-slider__controlls',
        responsive: [

            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.bag-slider').slick({
        slidesToShow: 1,
        appendArrows: '.bag-slider-controlls'
    })



  //spoiler
 // АККОРДЕОН
$(function() {
	
	$('.tabs').each(function(){
		var wrap = this;
		// открывать при загрузке активный слайд		
		if($(wrap).hasClass('active')) {
			$(this).find('.tab-content').slideDown();
		}
		// заголовок-кнопка		
		var title = $(wrap).find('.tab-item');
		
		// функционал при клике на кнопку
		$(title).on('click', function(){
			var wrap = $(this).parents(".tab-item");
			var content = $(wrap).find('.tab-content');
			
			if($(wrap).hasClass("active")) {
				$(wrap).removeClass("active");
				$(content).slideUp();
			} else {
				$(wrap).addClass("active");
				$(content).slideDown();
				$(wrap).siblings().removeClass('active');
				$(wrap).siblings().find('.tab-content').slideUp();
			}
			
		})
		
	})
	

	
})



});


