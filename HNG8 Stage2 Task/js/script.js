
const menu = document.getElementById('menu');
const nav = document.getElementById('contents');
const closeBtn = document.getElementById('close');

nav.style.display = 'none';
closeBtn.style.display = 'none';

// Activate navigation
menu.addEventListener('click', openNav);

function openNav() {
    nav.style.display = 'block';
    closeBtn.style.display = 'block';
    menu.style.display = 'none';
}

// close navigation
closeBtn.addEventListener('click', closeNav);

function closeNav() {
    nav.style.display = 'none';
    closeBtn.style.display = 'none';
    menu.style.display = 'block';
}