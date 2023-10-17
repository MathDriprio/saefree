const burger = document.querySelector('header img');
const nav = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})