function toggleMenu() {
    var open = document.querySelector('.open');
    var burgerMenu = document.querySelector('.burgerMenu');
    var close = document.querySelector('.close');

    close.style.display = 'block';
    open.style.display = 'none';
    burgerMenu.style.left = '0';
}
function closeMenu() {
    var open = document.querySelector('.open');
    var burgerMenu = document.querySelector('.burgerMenu');
    var close = document.querySelector('.close');

    close.style.display = 'none';
    open.style.display = 'block';
    burgerMenu.style.left = '-100%';
}