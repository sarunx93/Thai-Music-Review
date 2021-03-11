'use strict';
const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal1');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.btn--close-modal');
const btnReadMore = document.querySelector('.btn--read-more');
const btnReadMore2 = document.querySelector('.btn--read-more2');
const btnHearMore = document.querySelector('.btn--hear-more');
const section = document.querySelector('.section');
const newsFooter = document.querySelector('#news');
const newsNav = document.querySelector('#news_nav');
const nav = document.querySelector('.nav');
///////////////////////////////////////////////////////////////
//Modal Window
const openModal = function (e) {
    e.preventDefault();
    btnReadMore.onclick = function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    btnReadMore2.onclick = function () {
        modal1.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

}

const closeModal = function (e) {
    const close = function () {
        modal1.classList.add('hidden');
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };
    btnCloseModal.forEach(b => b.addEventListener('click', close));
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden') || !modal1.classList.contains('hidden')) {
            close();
        }
    })

}

btnReadMore.addEventListener('click', openModal);
closeModal();
btnReadMore2.addEventListener('click', openModal);

//Scroll
btnHearMore.addEventListener('click', function () {
    //const sCoords = section.getBoundingClientRect();
    section.scrollIntoView({ behavior: 'smooth' });
})

newsFooter.addEventListener('click', function () {
    section.scrollIntoView({ behavior: 'smooth' });
})

newsNav.addEventListener('click', function () {
    section.scrollIntoView({ behavior: 'smooth' });
})


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
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