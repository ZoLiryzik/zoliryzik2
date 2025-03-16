// Данные для карточек
const services = [
    {
        id: 1,
        title: "ПК диагностика",
        description: "Компьютерная диагностика автомобиля, адаптация дросселя и др.",
        price: "от 500 ₽",
        image: "/img/products/1.jpg"
    },
    {
        id: 2,
        title: "Эндоскопия двигателя",
        description: "Эндоскопия двигателя и катализатора",
        price: "от 500 ₽",
        image: "/img/products/2.jpg"
    },
    {
        id: 3,
        title: "Ремонт ГБЦ",
        description: "Полный ремонт ГБЦ",
        price: "от 5 000 ₽",
        image: "/img/products/3.jpg"
    }
    // Добавьте другие услуги
];

// Генерация карточек
const productContainer = document.getElementById("productContainer");
services.forEach(service => {
    const card = `
        <div class='card'>
            <figure class='card__poster'>
            <img class='card-poster__image' src='${service.image}?w=800&h=500&fit=crop' alt='poster2'>
            </figure>
            <div class='card__databox'>
            <h3 class='card-databox__heading'>${service.title}</h3>
            <div class='card-databox__description'><p>${service.description}</p><br><br>  </div>
            <div class='card-databox__description'><h1>${service.price}</h1></div>
            <button class="button" onclick="openModal(${service.id})">Подробнее</button>
        </div>
    `;
    productContainer.innerHTML += card;
});

// Генерация модальных окон
const modalsContainer = document.getElementById("modalsContainer");
services.forEach(service => {
    const modal = `
        <div id="modal${service.id}" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal(${service.id})">&times;</span>
                <h1>${service.title}</h1>
                <img src='${service.image}' alt='${service.title}'>
                <p>${service.description}</p>
                <a href="tel:+79603211010">Позвонить</a>
                <a href="https://t.me/+79603211010">Телеграм</a>
                <a href="https://wa.me/79603211010">WhatsApp</a>
            </div>
        </div>
    `;
    modalsContainer.innerHTML += modal;
});

// Открытие модального окна
function openModal(id) {
    document.getElementById(`modal${id}`).style.display = "flex";
}

// Закрытие модального окна
function closeModal(id) {
    document.getElementById(`modal${id}`).style.display = "none";
}

// Функция поиска
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    let found = false;
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!found) {
        productContainer.innerHTML = "<p>Ничего не найдено.</p>";
    }
}

// Отображение текущего года
document.getElementById("current-year").textContent = new Date().getFullYear();
