// DOM ELEMENTS PAGE SKILLS

const imgCarouselElm = document.getElementById('carousel-img');
const imagesElm = document.querySelectorAll('.carousel-images img');
const nextBtnElm = document.getElementById('next-btn');
const prevBtnElm = document.getElementById('prev-btn');

let index = 0;

nextBtnElm.addEventListener('click', () => {
    index = (index + 1) % imagesElm.length;
    imgCarouselElm.style.transform = `translate(-${index * 100}%)`;

});

prevBtnElm.addEventListener('click', () => {
    index = (index - 1 + imagesElm.length) % imagesElm.length;
    imgCarouselElm.style.transform = `translate(-${index * 100}%)`;
})

 



