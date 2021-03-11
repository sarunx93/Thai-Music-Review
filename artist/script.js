'use strict';
//Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
const maxSlide = slides.length;
const likeBtn = document.querySelectorAll('.like-btn');
const clicks = document.querySelectorAll('.clicks');
const slider = document.querySelector('.slider');
const artist = document.querySelector('#artist');

const commentInput = document.querySelector('#input');
const container = document.querySelector('.container');
const btnAdd = document.querySelector('.btn-add');
const commentList = document.querySelector('.comments');

const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector('.header');

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

//Adding Comment
btnAdd.addEventListener('click', function () {
    const comment = document.createElement('li');
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "Delete Comment";
    comment.innerText = input.value;
    commentList.appendChild(comment);

    input.value = "";
    commentList.appendChild(closeBtn);
    closeBtn.addEventListener('click', function () {
        commentList.removeChild(comment);
        commentList.removeChild(closeBtn);
    })

})


const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});



headerObserver.observe(header);


console.log(nav);
console.log(header);
console.log(navHeight);