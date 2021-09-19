const slider = document.querySelector('#slider');
const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');

/* slider.insertAdjacentElement('afterbegin', tableCommissions); */
let sliderFirst;

const next = () => {
    sliderFirst = document.querySelector('#tableCoins');
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 1s";
};

const prev = () => {
    sliderLast = document.querySelector('#tableCommissions');
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s";
};

btnRight.addEventListener('click', next);
btnLeft.addEventListener('click', prev);

/* setInterval(() => {
    next();
}, 5000); */

/* https://www.youtube.com/watch?v=WI0aCIEYXvw&t=592s */