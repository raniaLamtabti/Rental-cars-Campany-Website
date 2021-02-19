// Home Hero Slide
const slide1Btn = document.querySelector('#slide1Btn');
const slide2Btn = document.querySelector('#slide2Btn');
const slide3Btn = document.querySelector('#slide3Btn');

const ratCont = document.querySelector('.rat-cont');

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

const nameCont = document.querySelector('.name-cont');

const priceCont = document.querySelector('.price-cont');

const carImg = document.querySelector('.car-cont');

slide1Btn.addEventListener('click', () => {

    slide2Btn.classList.remove("activeBtn");
    slide3Btn.classList.remove("activeBtn");
    slide1Btn.classList.add("activeBtn");

    ratCont.classList.remove("rat-cont2");
    ratCont.classList.remove("rat-cont3");
    ratCont.classList.add("rat-cont1");

    text2.classList.remove("txt-Op");
    text3.classList.remove("txt-Op");
    text1.classList.add("txt-Op");

    nameCont.classList.remove("name-cont2");
    nameCont.classList.remove("name-cont3");
    nameCont.classList.add("name-cont1");

    priceCont.classList.remove("price-cont2");
    priceCont.classList.remove("price-cont3");
    priceCont.classList.add("price-cont1");

    carImg.classList.remove("car-cont2");
    carImg.classList.remove("car-cont3");
    carImg.classList.add("car-cont1");
});

slide2Btn.addEventListener('click', () => {

    slide3Btn.classList.remove("activeBtn");
    slide1Btn.classList.remove("activeBtn");
    slide2Btn.classList.add("activeBtn");

    ratCont.classList.remove("rat-cont1");
    ratCont.classList.remove("rat-cont3");
    ratCont.classList.add("rat-cont2");

    text2.classList.remove("txt-Op");
    text1.classList.remove("txt-Op");
    text2.classList.add("txt-Op");

    nameCont.classList.remove("name-cont1");
    nameCont.classList.remove("name-cont3");
    nameCont.classList.add("name-cont2");

    priceCont.classList.remove("price-cont1");
    priceCont.classList.remove("price-cont3");
    priceCont.classList.add("price-cont2");

    carImg.classList.remove("car-cont1");
    carImg.classList.remove("car-cont3");
    carImg.classList.add("car-cont2");
});

slide3Btn.addEventListener('click', () => {

    slide1Btn.classList.remove("activeBtn");
    slide2Btn.classList.remove("activeBtn");
    slide3Btn.classList.add("activeBtn");

    ratCont.classList.remove("rat-cont1");
    ratCont.classList.remove("rat-cont2");
    ratCont.classList.add("rat-cont3");

    text2.classList.remove("txt-Op");
    text1.classList.remove("txt-Op");
    text3.classList.add("txt-Op");

    nameCont.classList.remove("name-cont1");
    nameCont.classList.remove("name-cont2");
    nameCont.classList.add("name-cont3");

    priceCont.classList.remove("price-cont1");
    priceCont.classList.remove("price-cont2");
    priceCont.classList.add("price-cont3");

    carImg.classList.remove("car-cont1");
    carImg.classList.remove("car-cont2");
    carImg.classList.add("car-cont3");
});