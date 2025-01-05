// DOM ELEMENTS PAGE SKILLS

const imgCarouselElm = document.getElementById('carousel-img');
const imagesElm = document.querySelectorAll('.carousel-images img');
const nextBtnElm = document.getElementById('next-btn');
const prevBtnElm = document.getElementById('prev-btn');

let index = 0;

// EVENTS PAGE SKILLS
if(nextBtnElm) {
nextBtnElm.addEventListener('click', (event) => {
    event.preventDefault();
    index = (index + 1) % imagesElm.length;
    imgCarouselElm.style.transform = `translate(-${index * 100}%)`;

})
};

if(prevBtnElm) {
prevBtnElm.addEventListener('click', (event) => {
    event.preventDefault();
    index = (index - 1 + imagesElm.length) % imagesElm.length;
    imgCarouselElm.style.transform = `translate(-${index * 100}%)`;
})
};


// DOM ELEMENTS PAGE CONTACT

const addCommElm = document.getElementById('com-add');
const formELm = document.getElementById('form');
const nameElm = document.getElementById('name');
const textCommElm = document.getElementById('text-comment');
const buttonSubmitElm = document.getElementById('submit');
const confirmMessageElm = document.getElementById('confirmation-message')

// EVENTS PAGE CONTACT

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('name');
    const savedText = localStorage.getItem('comment');

    if(savedName && savedText)
        addCommElm.innerHTML = `<span style="font-size: 24px; font-weight: bold;">${savedName}</span>: 
                                <span style="font-size: 18px; font-weight: bold;">${savedText}</span>`;

});

formELm.addEventListener('submit', function(event)  {
    event.preventDefault();

    const nameStyled = `<span style="font-size: 24px; font-weight: bold;">${nameElm.value}</span>`; 
    const textStyled = `<span style="font-size: 18px; font-weight: bold;">${textCommElm.value}</span>`;

    const message = `${nameStyled}: ${textStyled}`

    confirmMessageElm.innerHTML = `Thank you, ${nameElm.value}, for your message! I will get back to you soon.`;
    confirmMessageElm.classList.remove('d-none');

    localStorage.setItem('name', nameElm.value);
    localStorage.setItem('comment', textCommElm.value);
    localStorage.setItem('message', message);

    addCommElm.innerHTML = message;

    formELm.reset();
});






 



