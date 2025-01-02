// DOM ELEMENTS PAGE SKILLS

const imgCarouselElm = document.getElementById('carousel-img');
const imagesElm = document.querySelectorAll('.carousel-images img');
const nextBtnElm = document.getElementById('next-btn');
const prevBtnElm = document.getElementById('prev-btn');

let index = 0;

// EVENTS PAGE SKILLS

// nextBtnElm.addEventListener('click', () => {
//     index = (index + 1) % imagesElm.length;
//     imgCarouselElm.style.transform = `translate(-${index * 100}%)`;

// });

// prevBtnElm.addEventListener('click', () => {
//     index = (index - 1 + imagesElm.length) % imagesElm.length;
//     imgCarouselElm.style.transform = `translate(-${index * 100}%)`;
// })


// DOM ELEMENTS PAGE CONTACT

const addCommElm = document.getElementById('com-add')
const formELm = document.getElementById('form')
const nameElm = document.getElementById('name')
const textCommElm = document.getElementById('text-comment')
const buttonSubmitElm = document.getElementById('submit')


const message = "";
formELm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameStyled = `<span style="font-size: 24px; font-weight: bold;">${nameElm.value}</span>`;
    const textStyled = `<span style="font-size: 18px; font-weight: bold;">${textCommElm.value}</span>`;
    const message = `${nameStyled}: ${textStyled}`;
    addCommElm.innerHTML = message;
});



 



