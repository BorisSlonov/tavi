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

content.style.display = "none"
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




	$('.open_bag_list').click(function () { 
        $('.list_and_offer__list')removeClass('list_hidden')
     })

   
});