// Header
const burgerMenuBtn = document.querySelector('.burgerMenuBtn');
const navLinks = document.querySelector('.nav-links');
burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle("open");
    navLinks.classList.toggle("burgerMenuToggle");
});