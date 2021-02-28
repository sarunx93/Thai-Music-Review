'use strict';
//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length;
const likeBtn = document.querySelectorAll('.like-btn');
const clicks = document.querySelectorAll('.clicks');

console.log(likeBtn, clicks);



const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
}
goToSlide(0);

const prevSlide = function () {
    if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
    }
    else {
        currentSlide--;
    }
    goToSlide(currentSlide);
}

const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    goToSlide(currentSlide);
}


btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);



likeBtn.forEach((btn, i) => {
    const click = clicks[i]
    let count = 0;
    btn.addEventListener('click', function () {
        count++;
        //click.innerHTML = Number.parseInt(clicks[0].innerHTML) + 1;
        click.innerHTML = count;
    })

})







