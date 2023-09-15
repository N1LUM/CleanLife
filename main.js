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
function openPopup() {
    var popupFrame = document.querySelector('.popupFrame');
    var overlay = document.querySelector('.overlay');
    var open = document.querySelector('.open');
    var burgerMenu = document.querySelector('.burgerMenu');
    var close = document.querySelector('.close');

    close.style.display = 'none';
    open.style.display = 'block';
    burgerMenu.style.left = '-100%';
    popupFrame.style.display = 'flex';
    overlay.style.display = 'block';
}
function closePopup() {
    var popupFrame = document.querySelector('.popupFrame');
    var overlay = document.querySelector('.overlay');

    popupFrame.style.display = 'none';
    overlay.style.display = 'none';
}
let secretNumber;
let attempts = 0;

//Лотерея
function startGame() {
    // Генерация случайного числа от 1 до 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    // Запрос у пользователя числа
    const userGuess = prompt(`Попробуйте угадать число от 1 до 100, число всегда разное`);

    // Проверка числа пользователя и выдача результата
    checkGuess(Number(userGuess));
}

function checkGuess(userGuess) {
    attempts++;

    if (userGuess === secretNumber) {
        showMessage(`Поздравляем! Вы выйграли бесплатный курс от нашего сайта!`);
    } else if (userGuess < secretNumber) {
        showMessage(`Попробуйте число больше. Попыток: ${attempts}`);
    } else {
        showMessage(`Попробуйте число меньше. Попыток: ${attempts}`);
    }
}

function showMessage(message) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//Подсветка меню
const menuItems = document.querySelectorAll(".menu_links__link");
// Добавляем обработчики событий для каждого элемента меню
menuItems.forEach((item) => {
    item.addEventListener("mouseover", highlightMenuItem);
    item.addEventListener("mouseout", removeHighlight);
});

// Функция для подсветки активного пункта меню
function highlightMenuItem(event) {
    event.target.style.color = "#0C9EAC"; // Меняем цвет текста при наведении
}

// Функция для снятия подсветки с пункта меню
function removeHighlight(event) {
    event.target.style.color = ""; // Возвращаем исходный цвет текста при уходе курсора
}

const menuItemsPhone = document.querySelectorAll(".links a");
// Добавляем обработчики событий для каждого элемента меню
menuItemsPhone.forEach((item) => {
    item.addEventListener("mouseover", highlightMenuItemPhone);
    item.addEventListener("mouseout", removeHighlightPhone);
});

// Функция для подсветки активного пункта меню
function highlightMenuItemPhone(event) {
    event.target.style.color = "#8EB12E"; // Меняем цвет текста при наведении
}

// Функция для снятия подсветки с пункта меню
function removeHighlightPhone(event) {
    event.target.style.color = ""; // Возвращаем исходный цвет текста при уходе курсора
}

// Функция для обновления текущего времени
function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = timeString;
}

// Обновляем время каждую секунду
setInterval(updateCurrentTime, 1000);

// Вызываем функцию обновления времени в начале
updateCurrentTime();